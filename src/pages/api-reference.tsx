import React, { useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function ApiReferencePage(): React.JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const { siteConfig } = useDocusaurusContext();
  const specUrl = `${siteConfig.baseUrl}openapi.json`;

  useEffect(() => {
    // Dynamically import the Scalar API Reference to avoid SSR issues
    import("@scalar/api-reference").then(({ createApiReference }) => {
      if (ref.current) {
        createApiReference(ref.current, {
          spec: { url: specUrl },
          hideDownloadButton: false,
          hideDarkModeToggle: true,
        });
      }
    });
  }, [specUrl]);

  return (
    <Layout title="API Reference" description="API Reference powered by Scalar">
      <div ref={ref} style={{ height: "calc(100vh - 60px)" }} />
    </Layout>
  );
}
