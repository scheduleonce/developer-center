import React, { useState, useEffect, useMemo } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

type ApiReferenceComponent = React.ComponentType<{
  configuration: {
    spec: { url: string };
    hideDownloadButton?: boolean;
    hideDarkModeToggle?: boolean;
  };
}>;

export default function ApiReferencePage(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [ScalarApiReference, setScalarApiReference] =
    useState<ApiReferenceComponent | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Dynamically import the Scalar ApiReference component to avoid SSR issues
    // Empty dependency array is intentional - we only need to load the component module once.
    // The configuration (including specUrl) is handled separately via useMemo and passed as props.
    import("@scalar/api-reference")
      .then((module) => {
        setScalarApiReference(module.ApiReference);
      })
      .catch((err) => {
        console.error("Failed to load API Reference component:", err);
        setError(err);
      });
  }, []);

  const configuration = useMemo(
    () => ({
      spec: { url: `${siteConfig.baseUrl}openapi.json` },
      hideDownloadButton: false,
      hideDarkModeToggle: true,
    }),
    [siteConfig.baseUrl],
  );

  return (
    <Layout title="API Reference" description="API Reference powered by Scalar">
      <div style={{ height: "calc(100vh - 60px)" }}>
        {error ? (
          <div
            style={{
              padding: "2rem",
              textAlign: "center",
              color: "var(--ifm-color-danger)",
            }}
          >
            <h2>Failed to Load API Reference</h2>
            <p>
              Unable to load the API Reference component. Please try refreshing
              the page.
            </p>
            <details style={{ marginTop: "1rem" }}>
              <summary>Error Details</summary>
              <pre style={{ textAlign: "left", marginTop: "1rem" }}>
                {error.message}
              </pre>
            </details>
          </div>
        ) : ScalarApiReference ? (
          <ScalarApiReference configuration={configuration} />
        ) : (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            Loading API Reference...
          </div>
        )}
      </div>
    </Layout>
  );
}
