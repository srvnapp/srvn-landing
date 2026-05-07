import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Srvn — Your AI Dining Agent";
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
          alignItems: "center",
          justifyContent: "center",
          background: "#121212",
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(247,141,81,0.18), transparent 70%)",
          fontFamily: "sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        {/* Badge */}
        <div
          style={{
            width: 168,
            height: 168,
            borderRadius: 38,
            background: "#f78d51",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 56,
            boxShadow: "0 30px 80px rgba(247,141,81,0.25)",
          }}
        >
          <svg width="124" height="124" viewBox="0 0 140 140">
            <path
              d="M96 46C96 30 84 22 70 22C56 22 42 31 42 46C42 61 55 67 70 70"
              stroke="#ffffff"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M44 94C44 110 56 118 70 118C84 118 98 109 98 94C98 79 85 73 70 70"
              stroke="#ffffff"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1,
            marginBottom: 28,
          }}
        >
          Srvn
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 40,
            fontWeight: 500,
            color: "rgba(255,255,255,0.72)",
            display: "flex",
            gap: 12,
          }}
        >
          <span>Your</span>
          <span style={{ color: "#f78d51", fontStyle: "italic" }}>
            AI Dining
          </span>
          <span>Agent</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
