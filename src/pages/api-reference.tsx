import React, { useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

// Declare the global Scalar object
declare global {
  interface Window {
    Scalar?: {
      createApiReference: (element: HTMLElement, config: any) => void;
    };
  }
}

export default function ApiReferencePage(): React.JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const { siteConfig } = useDocusaurusContext();
  const specUrl = `${siteConfig.baseUrl}openapi.json`;

  useEffect(() => {
    function mount() {
      if (window.Scalar && ref.current) {
        window.Scalar.createApiReference(ref.current, {
          spec: { url: specUrl },
          hideDownloadButton: false,
          hideDarkModeToggle: true,
        });
      }
    }

    if (!window.Scalar) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/@scalar/api-reference";
      script.async = true;
      script.onload = mount;
      document.head.appendChild(script);
    } else {
      mount();
    }
  }, [specUrl]);

  return (
    <Layout title="API Reference" description="API Reference powered by Scalar">
      <div ref={ref} style={{ height: "calc(100vh - 60px)" }} />
    </Layout>
  );
}
