import { ImageResponse } from "next/og";
import Logo from "../Logo";

export const alt = "SRVN logo and wordmark";
export const size = { width: 1200, height: 1200 };
export const contentType = "image/png";

/** One token-free brand image for every sharing type; no content or external requests. */
export default function SharingPreviewImage() {
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
          gap: 48,
          background: "#121212",
          backgroundImage:
            "radial-gradient(circle at 50% 45%, rgba(247,141,81,0.12), transparent 65%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <Logo size={360} />
        <div style={{ display: "flex", fontSize: 144, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.04em" }}>
          srvn
        </div>
      </div>
    ),
    size,
  );
}
