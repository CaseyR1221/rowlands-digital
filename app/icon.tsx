import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#274C5B",
          color: "#F8F8F5",
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: "-0.04em",
        }}
      >
        R
      </div>
    ),
    size,
  );
}
