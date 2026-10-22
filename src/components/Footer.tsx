import React from "react";
import { ArrowUp, Heart } from "lucide-react";
import { brandConfig } from "../config/brandConfig";
import { InstagramIcon } from "./InstagramIcon";

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenContact,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="main-footer"
      aria-label="Site Footer"
      style={{
        backgroundColor: "#070709",
        color: "#FFFFFF",
        paddingTop: "clamp(4rem, 7vw, 6rem)",
        paddingBottom: "clamp(2rem, 4vw, 3rem)",
        borderTop: "1px solid rgba(255, 77, 128, 0.25)",
      }}
    >
      <div className="container">
        
        {/* Top Footer Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(2.5rem, 5vw, 4rem)",
            paddingBottom: "clamp(3rem, 5vw, 4.5rem)",
            borderBottom: "1px solid rgba(255, 77, 128, 0.15)",
          }}
          className="footer-top-grid"
        >
          {/* Brand Identity & Logo */}
          <div style={{ maxWidth: "420px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "0.8rem" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  padding: "2px",
                  background: "linear-gradient(135deg, #FF2E74 0%, #FF85A2 100%)",
                  boxShadow: "0 0 16px rgba(255, 46, 116, 0.45)",
                  flexShrink: 0,
                }}
              >
                <img
                  src="/logo.png"
                  alt="SKU THE LABEL Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                  letterSpacing: "0.18em",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  lineHeight: 1,
                }}
              >
                {brandConfig.brandName}
              </span>
            </div>

            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.05rem",
                fontStyle: "italic",
                color: "var(--color-hot-pink)",
                marginBottom: "0.8rem",
              }}
            >
              Official Launch · 01 December 2026
            </p>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.82rem",
                lineHeight: 1.6,
                color: "rgba(255, 255, 255, 0.72)",
                fontWeight: 300,
                marginBottom: "1.5rem",
              }}
            >
              Curated by Shruti & Komal. Sector 18, GGN (Gurugram).
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <a
                href={brandConfig.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow SKU THE LABEL on Instagram"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.55rem 1.15rem",
                  borderRadius: "999px",
                  border: "1px solid rgba(255, 77, 128, 0.4)",
                  backgroundColor: "rgba(255, 46, 116, 0.12)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.14em",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  boxShadow: "0 0 15px rgba(255, 46, 116, 0.2)",
                  transition: "all 0.3s ease",
                }}
                className="footer-social-pill"
              >
                <InstagramIcon size={15} strokeWidth={1.5} color="var(--color-hot-pink)" />
                <span>@{brandConfig.social.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2rem",
            }}
            className="footer-links-grid"
          >
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--color-hot-pink)",
                  marginBottom: "1.25rem",
                }}
              >
                NAVIGATION
              </span>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <li>
                  <a href="#hero" style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.8)", letterSpacing: "0.04em", textDecoration: "none" }}>
                    Launch Countdown
                  </a>
                </li>
                <li>
                  <a href="#launch-details" style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.8)", letterSpacing: "0.04em", textDecoration: "none" }}>
                    Sector 18 GGN Store
                  </a>
                </li>
                <li>
                  <a href={brandConfig.social.instagramUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.8)", letterSpacing: "0.04em", textDecoration: "none" }}>
                    Instagram @sku.thelabel
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--color-hot-pink)",
                  marginBottom: "1.25rem",
                }}
              >
                CONCIERGE & LEGAL
              </span>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                <li>
                  <button
                    type="button"
                    onClick={onOpenContact}
                    style={{
                      background: "none",
                      border: "none",
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "0.85rem",
                      cursor: "pointer",
                      padding: 0,
                      textAlign: "left",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Client Concierge
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenPrivacy}
                    style={{
                      background: "none",
                      border: "none",
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "0.85rem",
                      cursor: "pointer",
                      padding: 0,
                      textAlign: "left",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenTerms}
                    style={{
                      background: "none",
                      border: "none",
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "0.85rem",
                      cursor: "pointer",
                      padding: 0,
                      textAlign: "left",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Terms & Conditions
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Indian Market Note */}
          <div
            style={{
              padding: "1.5rem",
              backgroundColor: "rgba(20, 15, 26, 0.85)",
              border: "1px solid rgba(255, 77, 128, 0.3)",
              borderRadius: "14px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div>
              <span
                style={{
                  display: "block",
                  fontSize: "0.68rem",
                  letterSpacing: "0.2em",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "var(--color-hot-pink)",
                  marginBottom: "0.6rem",
                }}
              >
                FLAGSHIP STORE · SECTOR 18 GGN
              </span>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "rgba(255, 255, 255, 0.85)", fontWeight: 300, marginBottom: "0.4rem" }}>
                Address: <strong style={{ color: "#FFFFFF" }}>{brandConfig.store.address}</strong>
              </p>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "rgba(255, 255, 255, 0.85)", fontWeight: 300, marginBottom: "0.4rem" }}>
                Store No: <a href={brandConfig.store.phoneTel} style={{ color: "var(--color-blush-pink)", fontWeight: 600, textDecoration: "none" }}>{brandConfig.store.phoneDisplay}</a>
              </p>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "rgba(255, 255, 255, 0.85)", fontWeight: 300, marginBottom: "0.4rem" }}>
                Owners: <strong style={{ color: "#FFFFFF" }}>{brandConfig.store.owners}</strong>
              </p>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.6, color: "var(--color-hot-pink)", fontWeight: 600 }}>
                Instagram: <strong>{brandConfig.social.instagramHandle}</strong>
              </p>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                background: "none",
                border: "none",
                color: "#FFFFFF",
                fontSize: "0.72rem",
                letterSpacing: "0.16em",
                fontWeight: 600,
                textTransform: "uppercase",
                cursor: "pointer",
                marginTop: "1.5rem",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-hot-pink)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "2rem",
            fontSize: "0.75rem",
            color: "rgba(255, 255, 255, 0.5)",
            textAlign: "center",
          }}
          className="footer-bottom-row"
        >
          <div>
            © {new Date().getFullYear()} {brandConfig.brandName}. All rights reserved.
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
            <span>Designed with</span>
            <Heart size={12} color="var(--color-vibrant-pink)" fill="var(--color-vibrant-pink)" />
            <span>for Indian women everywhere</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .footer-top-grid {
            grid-template-columns: 1.4fr 1.2fr 1fr !important;
          }
          .footer-bottom-row {
            flex-direction: row !important;
            text-align: left !important;
          }
        }
        .footer-social-pill:hover {
          background: linear-gradient(135deg, #FF2E74 0%, #FF4D80 100%) !important;
          border-color: #FF2E74 !important;
          color: #FFFFFF !important;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
};

