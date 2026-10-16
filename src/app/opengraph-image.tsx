import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

export const alt = "Cracked Krypton Client — free download, no key needed";
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
          gap: 20,
          background: "#0A0E14",
          position: "relative",
        }}
      >
        {/* glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(500px 320px at 22% 30%, rgba(110,147,190,0.30), transparent 70%), radial-gradient(420px 280px at 80% 72%, rgba(150,180,214,0.20), transparent 70%)",
          }}
        />

        {/* mark */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            gap: 12,
            top: 72,
            left: 72,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              border: "2px solid #6E93BE",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#C4D9F0",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            K
          </div>
          <div style={{ color: "#EAF1F8", fontSize: 24, fontWeight: 600 }}>
            {brand.wordmark}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              color: "#EAF1F8",
              fontSize: 88,
              fontWeight: 700,
              letterSpacing: "-3.5px",
              lineHeight: 1.05,
              display: "flex",
            }}
          >
            Cracked Krypton
          </div>
          <div
            style={{
              color: "#93A9C2",
              fontSize: 28,
              display: "flex",
            }}
          >
            82+ modules · Unlocked · No license key · No login
          </div>
          <div
            style={{
              marginTop: 14,
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 26px",
              borderRadius: 999,
              border: "1px solid #00BB7F",
              background: "rgba(0,187,127,0.15)",
              color: "#00BB7F",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            CRACKED · FREE · v{brand.version}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
