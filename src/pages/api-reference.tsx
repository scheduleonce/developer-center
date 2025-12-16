import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function ApiReferencePage(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const specUrl = `${siteConfig.baseUrl}openapi.json`;
  const [ApiReference, setApiReference] = useState<any>(null);

  useEffect(() => {
    // Dynamically import the Scalar ApiReference component to avoid SSR issues
    import("@scalar/api-reference").then((module) => {
      setApiReference(() => module.ApiReference);
    });
  }, []);

  const configuration = {
    spec: { url: specUrl },
    hideDownloadButton: false,
    hideDarkModeToggle: true,
  };

  return (
    <Layout title="API Reference" description="API Reference powered by Scalar">
      <div style={{ height: "calc(100vh - 60px)" }}>
        {ApiReference && <ApiReference configuration={configuration} />}
      </div>
    </Layout>
  );
}
