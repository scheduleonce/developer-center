import OriginalMDXComponents from "@theme-original/MDXComponents";
import Image from "../../components/Image";
// import React from "react"; // Removed duplicate import

function Callout({
  icon,
  theme,
  children,
}: {
  icon?: string;
  theme?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="callout"
      data-theme={theme}
      style={{
        border: "1px solid var(--ifm-color-emphasis-300)",
        borderLeftWidth: 4,
        borderLeftColor: "var(--ifm-color-primary)",
        padding: "0.75rem 1rem",
        margin: "1rem 0",
        borderRadius: 4,
        background: "var(--ifm-background-surface-color)",
      }}
    >
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
        {icon && (
          <span aria-hidden="true" style={{ fontSize: "1.1rem" }}>
            {icon}
          </span>
        )}
        <div style={{ flex: 1 }}>{children}</div>
      </div>
    </div>
  );
}

function Table({
  align,
  children,
}: {
  align?: string[];
  children: React.ReactNode;
}) {
  // Basic passthrough; align not implemented fully yet
  return <table>{children}</table>;
}

const components = {
  ...OriginalMDXComponents,
  Image,
  Callout,
  Table,
};

// Debug log to ensure override is applied
if (typeof window !== "undefined") {
  // eslint-disable-next-line no-console
  console.log("[MDXComponents override] Image component registered");
}

export default components;
export { components as MDXComponents };
