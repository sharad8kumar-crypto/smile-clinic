import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0e7c86, #0b2b33)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 34, color: "#f4b942", letterSpacing: 4 }}>DENTAL CLINIC</div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 20 }}>{site.name}</div>
        <div style={{ fontSize: 38, marginTop: 24, opacity: 0.85 }}>{site.tagline}</div>
      </div>
    ),
    size
  );
}