import React, { useState, useEffect } from "react";
import { MapPin, Calendar, ArrowUpRight, Sparkles, MessageSquare, Phone, User, MessageCircle } from "lucide-react";
import { brandConfig } from "../config/brandConfig";
import { InstagramIcon } from "./InstagramIcon";

interface LaunchDetailsSectionProps {
  onOpenContact?: () => void;
}

export const LaunchDetailsSection: React.FC<LaunchDetailsSectionProps> = ({ onOpenContact }) => {
  const [scrollTilt, setScrollTilt] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const onScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastY;
      lastY = currentY;

      const tilt = Math.max(-2, Math.min(2, diff * 0.08));
      setScrollTilt(tilt);
      setIsScrolling(true);

      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        setScrollTilt(0);
        setIsScrolling(false);
      }, 140);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id="launch-details"
      aria-label="Launch and Store Information"
      style={{
        backgroundColor: "#0A0A0C",
        padding: "clamp(3.5rem, 6vw, 5.5rem) 1.5rem",
        borderTop: "1px solid rgba(255, 77, 128, 0.2)",
        borderBottom: "1px solid rgba(255, 77, 128, 0.2)",
      }}
    >
      <div className="container" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "620px", margin: "0 auto clamp(2.5rem, 4vw, 3.5rem)" }}>
          <span className="eyebrow" style={{ display: "inline-block", marginBottom: "0.5rem", color: "#FF9EBB" }}>
            THE UPCOMING CHAPTER
          </span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 500,
              color: "#FFFFFF",
              marginBottom: "0.8rem",
              lineHeight: 1.15,
            }}
          >
            Where To Find Us
          </h2>
          <p
            style={{
              color: "rgba(255, 235, 242, 0.8)",
              fontSize: "clamp(0.88rem, 1.2vw, 1rem)",
              lineHeight: 1.6,
            }}
          >
            Founded by <strong style={{ color: "#FFB6CB" }}>{brandConfig.store.owners}</strong>. Preparing our digital wardrobe release & flagship experience store.
          </p>
        </div>

        {/* 3 Pillars Grid: Launch Date, Sector 18 GGN Store & Owners, Instagram @sku.thelabel */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(1.5rem, 3vw, 2.2rem)",
            transform: isScrolling
              ? `rotate(${scrollTilt * 0.25}deg) translateY(${scrollTilt * 0.4}px)`
              : "none",
            transition: "transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
        >
          {/* Card 1: Official Launch Date */}
          <div
            style={{
              backgroundColor: "rgba(18, 15, 23, 0.88)",
              border: "1px solid rgba(255, 77, 128, 0.35)",
              borderRadius: "16px",
              padding: "clamp(1.8rem, 3vw, 2.4rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.7), 0 0 20px rgba(255, 77, 128, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            className="hover-card shake-on-hover"
          >
            <div>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 77, 128, 0.15)",
                  border: "1px solid rgba(255, 77, 128, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.4rem",
                }}
              >
                <Calendar size={22} color="#FF4D80" strokeWidth={1.8} />
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "#FF9EBB",
                  textTransform: "uppercase",
                  marginBottom: "0.4rem",
                }}
              >
                DIGITAL STORE RELEASE
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.6rem",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  marginBottom: "0.8rem",
                }}
              >
                01 December 2026
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "rgba(255, 235, 242, 0.75)",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                Official launch countdown is live. Get ready for our premier digital release on 01 December 2026.
              </p>
            </div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                color: "#FF4D80",
                textTransform: "uppercase",
              }}
            >
              <Sparkles size={14} color="#FF2E74" />
              <span>Worldwide & Pan-India Shipping</span>
            </div>
          </div>

          {/* Card 2: Store in Sector 18 GGN & Owners */}
          <div
            style={{
              backgroundColor: "rgba(18, 15, 23, 0.88)",
              border: "1px solid rgba(255, 77, 128, 0.35)",
              borderRadius: "16px",
              padding: "clamp(1.8rem, 3vw, 2.4rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.7), 0 0 20px rgba(255, 77, 128, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            className="hover-card shake-on-hover"
          >
            <div>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 77, 128, 0.15)",
                  border: "1px solid rgba(255, 77, 128, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.4rem",
                }}
              >
                <MapPin size={22} color="#FF4D80" strokeWidth={1.8} />
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "#FF9EBB",
                  textTransform: "uppercase",
                  marginBottom: "0.4rem",
                }}
              >
                PHYSICAL STORE & LOCATION
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.6rem",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  marginBottom: "0.8rem",
                }}
              >
                Sector 18 GGN
              </h3>

              {/* Structured Key Details */}
              <div
                style={{
                  backgroundColor: "rgba(10, 8, 14, 0.9)",
                  borderRadius: "10px",
                  padding: "0.9rem 1rem",
                  marginBottom: "1.2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.65rem",
                  border: "1px solid rgba(255, 77, 128, 0.25)",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                  <MapPin size={15} color="#FF4D80" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", color: "#FF9EBB", display: "block" }}>
                      ADDRESS
                    </span>
                    <span style={{ fontSize: "0.88rem", fontWeight: 600, color: "#FFFFFF" }}>
                      {brandConfig.store.address}
                    </span>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <Phone size={15} color="#FF4D80" style={{ flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", color: "#FF9EBB", display: "block" }}>
                      STORE NO. / CONTACT
                    </span>
                    <a
                      href={brandConfig.store.phoneTel}
                      style={{ fontSize: "0.88rem", fontWeight: 700, color: "#FF4D80", textDecoration: "none" }}
                    >
                      {brandConfig.store.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <User size={15} color="#FF4D80" style={{ flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", color: "#FF9EBB", display: "block" }}>
                      OWNERS / FOUNDERS
                    </span>
                    <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#FFFFFF" }}>
                      {brandConfig.store.owners}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons: Direct Call & WhatsApp */}
            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
              <a
                href={brandConfig.store.phoneTel}
                style={{
                  flex: "1 1 auto",
                  background: "linear-gradient(135deg, #FF2E74 0%, #FF4D80 100%)",
                  color: "#0A0A0C",
                  borderRadius: "8px",
                  padding: "0.65rem 0.9rem",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem",
                  boxShadow: "0 4px 16px rgba(255, 46, 116, 0.4)",
                }}
              >
                <Phone size={14} color="#0A0A0C" />
                <span>CALL STORE</span>
              </a>

              <a
                href={`https://wa.me/91${brandConfig.store.phone}?text=${encodeURIComponent("Hello Shruti & Komal, I am inquiring about SKU THE LABEL Sector 18 GGN store.")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: "1 1 auto",
                  backgroundColor: "rgba(22, 18, 28, 0.95)",
                  border: "1px solid rgba(255, 77, 128, 0.4)",
                  color: "#FFFFFF",
                  borderRadius: "8px",
                  padding: "0.65rem 0.9rem",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem",
                }}
              >
                <MessageCircle size={14} color="#25D366" />
                <span>WHATSAPP</span>
              </a>

              {onOpenContact && (
                <button
                  type="button"
                  onClick={onOpenContact}
                  style={{
                    flex: "1 1 100%",
                    backgroundColor: "transparent",
                    border: "1px dashed rgba(255, 77, 128, 0.35)",
                    color: "#FF9EBB",
                    borderRadius: "8px",
                    padding: "0.55rem 0.9rem",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.4rem",
                    marginTop: "0.3rem",
                  }}
                >
                  <MessageSquare size={13} color="#FF4D80" />
                  <span>PREVIEW & APPOINTMENTS</span>
                </button>
              )}
            </div>
          </div>

          {/* Card 3: Instagram ID sku.thelabel */}
          <div
            style={{
              backgroundColor: "rgba(22, 16, 26, 0.95)",
              border: "1px solid rgba(255, 77, 128, 0.5)",
              borderRadius: "16px",
              padding: "clamp(1.8rem, 3vw, 2.4rem)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 14px 40px rgba(0, 0, 0, 0.8), 0 0 25px rgba(255, 46, 116, 0.25)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            className="hover-card shake-on-hover"
          >
            <div>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 77, 128, 0.15)",
                  border: "1px solid rgba(255, 77, 128, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.4rem",
                }}
              >
                <InstagramIcon size={22} color="#FF4D80" strokeWidth={1.8} />
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  color: "#FF4D80",
                  textTransform: "uppercase",
                  marginBottom: "0.4rem",
                }}
              >
                OFFICIAL COMMUNITY
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.6rem",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  marginBottom: "0.8rem",
                }}
              >
                @sku.thelabel
              </h3>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "rgba(255, 235, 242, 0.8)",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                Join our official Instagram community for launch drops, store updates, and announcements.
              </p>
            </div>
            <a
              href={brandConfig.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "#FF4D80",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              <span>FOLLOW ON INSTAGRAM</span>
              <ArrowUpRight size={15} strokeWidth={2} />
            </a>
          </div>

        </div>

      </div>

      <style>{`
        .hover-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px -8px rgba(0, 0, 0, 0.9), 0 0 25px rgba(255, 46, 116, 0.35) !important;
          border-color: #FF2E74 !important;
        }
      `}</style>
    </section>
  );
};

export default LaunchDetailsSection;
