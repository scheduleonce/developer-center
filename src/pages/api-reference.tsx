import React, { useState, useEffect, useMemo } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function ApiReferencePage(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const specUrl = `${siteConfig.baseUrl}openapi.json`;
  const [ApiReference, setApiReference] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Dynamically import the Scalar ApiReference component to avoid SSR issues
    import("@scalar/api-reference")
      .then((module) => {
        setApiReference(() => module.ApiReference);
      })
      .catch((err) => {
        console.error("Failed to load API Reference component:", err);
        setError(err);
      });
  }, []);

  const configuration = useMemo(
    () => ({
      spec: { url: specUrl },
      hideDownloadButton: false,
      hideDarkModeToggle: true,
    }),
    [specUrl],
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
        ) : ApiReference ? (
          <ApiReference configuration={configuration} />
        ) : (
          <div style={{ padding: "2rem", textAlign: "center" }}>
            Loading API Reference...
          </div>
        )}
      </div>
    </Layout>
  );
}
