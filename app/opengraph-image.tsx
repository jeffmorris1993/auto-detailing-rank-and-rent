import { ImageResponse } from "next/og";
import { BRAND } from "@/lib/site-config";

export const alt = `${BRAND.name} — Mobile Car Wash & Detailing in Oakland County, MI`;
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
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #3b82f6 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 9999,
              background: "#ffffff",
              color: "#1d4ed8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            OC
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, opacity: 0.95 }}>
            {BRAND.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: 920,
            }}
          >
            Mobile Car Detailing in Birmingham, MI
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 500,
              opacity: 0.92,
              maxWidth: 920,
            }}
          >
            Request a quote. Check availability in your area of Oakland
            County.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            opacity: 0.9,
          }}
        >
          <div>Birmingham · Bloomfield Hills · Rochester Hills · Troy</div>
          <div style={{ fontWeight: 600 }}>Request a Quote</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
