import React, { useEffect, useRef, useState } from "react";

interface ScalarExplorerProps {
  primarySpecUrl?: string;
  fallbackSpecUrl?: string;
  className?: string;
  configuration?: Record<string, any>;
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
  const outerRef = useRef<HTMLDivElement | null>(null);
  const configRef = useRef(configuration);
  const [status, setStatus] = useState<"loading" | "mounted" | "error">(
    "loading"
  );
  const [message, setMessage] = useState("Loading API reference...");

  // Decide which spec URL to use (primary vs fallback)
  const probeHead = async (url: string, timeoutMs = 2500): Promise<boolean> => {
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

  const decideSpec = async () => {
    const primaryOk = await probeHead(primarySpecUrl);
    if (primaryOk) return primarySpecUrl;
    const fallbackOk = (await probeHead(fallbackSpecUrl)) || true;
    if (fallbackOk) return fallbackSpecUrl;
    return primarySpecUrl;
  };

  const applyInitialThemeClass = () => {
    try {
      const root = document.documentElement;
      const mode = root.getAttribute("data-theme");
      if (outerRef.current) {
        outerRef.current.classList.toggle("scalar-dark-mode", mode === "dark");
      }
    } catch {}
  };

  const reconcileThemeVars = () => {
    const el = outerRef.current;
    if (!el) return;
    const style = getComputedStyle(el);
    if (
      style.getPropertyValue("--scalar-background-1").trim() === "transparent"
    ) {
      const root = document.documentElement;
      const mode = root.getAttribute("data-theme");
      el.classList.toggle("scalar-dark-mode", mode === "dark");
      // Force reflow to encourage style recalculation
      el.style.outline = "1px solid transparent";
      void el.offsetHeight;
      el.style.outline = "";
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
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

    const mount = async () => {
      try {
        applyInitialThemeClass();
        await ensureScript();
        if (cancelled) return;
        const specUrl = await decideSpec();
        if (cancelled) return;
        if (!containerRef.current) return;
        if (!window.Scalar || !window.Scalar.createApiReference) {
          throw new Error("Scalar global not available after script load");
        }
        window.Scalar.createApiReference(containerRef.current, {
          spec: { url: specUrl },
          hideDownloadButton: false,
          hideDarkModeToggle: true,
          layout: "modern",
          ...configRef.current,
        });
        if (!cancelled) {
          setStatus("mounted");
          setMessage("");
          log("Mounted with", specUrl);
          // Post-mount checks
          requestAnimationFrame(() => reconcileThemeVars());
          setTimeout(reconcileThemeVars, 120);
        }
      } catch (e) {
        if (!cancelled) {
          console.debug("[ScalarExplorer] Mount error", e);
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
  }, [primarySpecUrl, fallbackSpecUrl]);

  // Reconciliation on status change (e.g., remount after SPA navigation)
  useEffect(() => {
    if (status === "mounted") {
      requestAnimationFrame(() => reconcileThemeVars());
      const id = setTimeout(reconcileThemeVars, 250);
      return () => clearTimeout(id);
    }
  }, [status]);

  // Observe live theme changes
  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    const el = outerRef.current;
    if (!root || !el) return;
    const apply = () => {
      const mode = root.getAttribute("data-theme");
      el.classList.toggle("scalar-dark-mode", mode === "dark");
      reconcileThemeVars();
    };
    apply();
    const observer = new MutationObserver((muts) => {
      for (const m of muts) {
        if (m.type === "attributes" && m.attributeName === "data-theme")
          apply();
      }
    });
    observer.observe(root, { attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={outerRef}
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
