import React from "react";

type Props = {
  src: string;
  alt?: string | number;
  title?: string;
  caption?: string;
  border?: boolean;
  width?: number | string;
  height?: number | string;
};

export default function Image({
  src,
  alt = "",
  title,
  caption,
  border = false,
  width,
  height,
}: Props) {
  const style: React.CSSProperties = {
    maxWidth: "100%",
    border: border ? "1px solid var(--ifm-color-emphasis-300)" : undefined,
    borderRadius: border ? 4 : undefined,
    display: "block",
    margin: "1rem auto",
  };
  return (
    <figure style={{ textAlign: "center" }}>
      <img
        src={src}
        alt={String(alt)}
        title={title}
        style={style}
        width={width}
        height={height}
      />
      {caption && (
        <figcaption
          style={{
            fontSize: "0.85rem",
            color: "var(--ifm-color-emphasis-600)",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
