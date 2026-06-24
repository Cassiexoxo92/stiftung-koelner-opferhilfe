import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Stiftung Kölner Opferhilfe";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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
          backgroundColor: "#0d7377",
          gap: 32,
        }}
      >
        {/* Logo */}
        <img
          src="https://stiftung-koelner-opferhilfe.vercel.app/logo-koh.gif"
          width={160}
          height={160}
          style={{ objectFit: "contain" }}
        />

        {/* Text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-1px",
            }}
          >
            Stiftung Kölner Opferhilfe
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(167,243,208,0.85)",
              fontWeight: 400,
            }}
          >
            Vertraulich · Kostenlos · Unbürokratisch
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
