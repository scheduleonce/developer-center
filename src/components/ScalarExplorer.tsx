import React, { useEffect, useRef, useState } from "react";
// Removed color mode hook dependency; theming handled via global CSS variables.

interface ScalarExplorerProps {
  primarySpecUrl?: string;
  fallbackSpecUrl?: string;
  className?: string;
  configuration?: Record<string, any>;
}

declare global {
  interface Window {
    Scalar?: any;
  }
}

const DEFAULT_PRIMARY = "https://developers.oncehub.com/openapi/oncehub.json";
const DEFAULT_FALLBACK = "/openapi.json";

export const ScalarExplorer: React.FC<ScalarExplorerProps> = ({
  primarySpecUrl = DEFAULT_PRIMARY,
  fallbackSpecUrl = DEFAULT_FALLBACK,
  className,
  configuration = {},
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<"loading" | "mounted" | "error">(
    "loading"
  );
  const [message, setMessage] = useState<string>("Loading API reference...");

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard

    let cancelled = false;
    const log = (...args: any[]) => console.debug("[ScalarExplorer]", ...args);

    const ensureScript = () => {
      if (window.Scalar && window.Scalar.createApiReference)
        return Promise.resolve();
      return new Promise<void>((resolve, reject) => {
        const existing = document.querySelector<HTMLScriptElement>(
          "script[data-scalar-cdn]"
        );
        if (existing) {
          existing.addEventListener("load", () => resolve(), { once: true });
          existing.addEventListener(
            "error",
            () => reject(new Error("CDN script load error")),
            { once: true }
          );
          return;
        }
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/@scalar/api-reference";
        script.async = true;
        script.dataset.scalarCdn = "true";
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("CDN script load error"));
        document.head.appendChild(script);
      });
    };

    const probeHead = async (
      url: string,
      timeoutMs = 2500
    ): Promise<boolean> => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), timeoutMs);
        const res = await fetch(url, {
          method: "HEAD",
          signal: controller.signal,
        });
        clearTimeout(timeout);
        return res.ok;
      } catch {
        return false;
      }
    };

    const decideSpec = async (): Promise<string> => {
      const primaryOk = await probeHead(primarySpecUrl);
      if (primaryOk) return primarySpecUrl;
      const fallbackOk = (await probeHead(fallbackSpecUrl)) || true; // we usually expect local file
      if (fallbackOk) return fallbackSpecUrl;
      return primarySpecUrl; // last resort
    };

    const mount = async () => {
      try {
        await ensureScript();
        if (cancelled) return;
        const specUrl = await decideSpec();
        if (cancelled) return;
        if (!containerRef.current) {
          log("No container");
          return;
        }
        if (!window.Scalar || !window.Scalar.createApiReference) {
          throw new Error("Scalar global not available after script load");
        }
        window.Scalar.createApiReference(containerRef.current, {
          spec: { url: specUrl },
          hideDownloadButton: false,
          hideDarkModeToggle: true,
          layout: "modern",
          ...configuration,
        });
        if (!cancelled) {
          setStatus("mounted");
          setMessage("");
          log("Mounted with", specUrl);
        }
      } catch (e) {
        if (!cancelled) {
          log("Mount error", e);
          setStatus("error");
          setMessage(
            "Failed to load API explorer. Check console/network and retry."
          );
        }
      }
    };

    mount();
    return () => {
      cancelled = true;
    };
  }, [primarySpecUrl, fallbackSpecUrl, configuration]);

  return (
    <div
      className={["scalar-api-reference", className].filter(Boolean).join(" ")}
      style={{ minHeight: "75vh", position: "relative" }}
    >
      {status !== "mounted" && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            padding: "1rem",
            fontSize: "0.9rem",
          }}
        >
          {message}
        </div>
      )}
      <div ref={containerRef} />
      {status === "error" && (
        <p
          style={{
            marginTop: "4rem",
            fontSize: "0.85rem",
            color: "var(--ifm-color-danger)",
          }}
        >
          If this persists, verify the spec URLs and CDN reachability.
        </p>
      )}
    </div>
  );
};

export default ScalarExplorer;
