import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Sparkles, Clock, CheckCircle2, Phone, User } from "lucide-react";
import { brandConfig } from "../config/brandConfig";
import { InstagramIcon } from "./InstagramIcon";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const HeroSection: React.FC = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Scroll velocity tracking for interactive dynamic shake
  const [scrollTilt, setScrollTilt] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const onScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastY;
      lastY = currentY;

      // Subtle dynamic tilt / wobble based on scroll speed & direction
      const tilt = Math.max(-2.5, Math.min(2.5, diff * 0.1));
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

  // Live countdown timer to 1 December 2026
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-12-01T00:00:00+05:30").getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailOrPhone.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="hero"
      aria-label="SKU THE LABEL Launching Soon"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "90vh",
        backgroundColor: "#0A0A0C",
        backgroundImage:
          "radial-gradient(circle at 50% 25%, rgba(255, 46, 116, 0.22) 0%, rgba(255, 77, 128, 0.08) 45%, #0A0A0C 85%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(3rem, 6vw, 5.5rem) 1.5rem clamp(3rem, 5vw, 4.5rem)",
        boxSizing: "border-box",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Rings (Rotating Pink Aura Animations) */}
      <div
        className="animated-pink-ring-1"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "clamp(320px, 80vw, 850px)",
          height: "clamp(320px, 80vw, 850px)",
          borderRadius: "50%",
          border: "1px solid rgba(255, 77, 128, 0.35)",
          boxShadow: "0 0 60px rgba(255, 46, 116, 0.15)",
          pointerEvents: "none",
        }}
      />
      <div
        className="animated-pink-ring-2"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "clamp(240px, 60vw, 650px)",
          height: "clamp(240px, 60vw, 650px)",
          borderRadius: "50%",
          border: "1px dashed rgba(255, 77, 128, 0.25)",
          pointerEvents: "none",
        }}
      />

      {/* Floating Sparkles in Background */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "18%",
          width: "4px",
          height: "4px",
          borderRadius: "50%",
          backgroundColor: "#FF7597",
          boxShadow: "0 0 12px 3px #FF2E74",
          animation: "radar-ping 2.5s infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "28%",
          right: "16%",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          backgroundColor: "#FFA6C1",
          boxShadow: "0 0 14px 4px #FF4D80",
          animation: "radar-ping 3s infinite 1s",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "12%",
          width: "3px",
          height: "3px",
          borderRadius: "50%",
          backgroundColor: "#FF7597",
          boxShadow: "0 0 10px 2px #FF2E74",
          animation: "radar-ping 2.8s infinite 0.5s",
        }}
      />

      <div style={{ maxWidth: "860px", width: "100%", position: "relative", zIndex: 2 }}>
        
        {/* Official Brand Logo Medallion with Glowing Halo */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}>
          <div
            style={{
              position: "relative",
              width: "clamp(110px, 16vw, 150px)",
              height: "clamp(110px, 16vw, 150px)",
              borderRadius: "50%",
              padding: "3px",
              background: "linear-gradient(135deg, #FF2E74 0%, #FF85A2 50%, #FF2E74 100%)",
              boxShadow: "0 0 40px rgba(255, 46, 116, 0.55), 0 12px 35px rgba(0, 0, 0, 0.9)",
              animation: "logoMedallionGlow 4s ease-in-out infinite",
              overflow: "hidden",
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
        </div>

        {/* Brand Lockup */}
        <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", marginBottom: "1rem" }}>
          <div style={{ display: "inline-flex", alignItems: "flex-start", position: "relative" }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.8rem, 6vw, 4.4rem)",
                fontWeight: 600,
                color: "#FFFFFF",
                lineHeight: 0.95,
                letterSpacing: "0.08em",
                textShadow: "0 0 30px rgba(255, 77, 128, 0.35)",
              }}
            >
              SKU
            </span>
            <svg
              className="heart-beat-pulse"
              style={{
                width: "24px",
                height: "24px",
                marginLeft: "6px",
                marginTop: "2px",
                transform: "rotate(10deg)",
              }}
              viewBox="0 0 24 24"
              fill="#FF2E74"
              stroke="#FF7597"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(0.72rem, 1.2vw, 0.9rem)",
              fontWeight: 700,
              letterSpacing: "0.45em",
              color: "#FF9EBB",
              marginTop: "0.4rem",
              textShadow: "0 0 10px rgba(255, 77, 128, 0.3)",
            }}
          >
            THE LABEL
          </span>
        </div>

        {/* Headline with Pink Shimmer Animation */}
        <h1
          className="shimmer-headline"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            marginBottom: "1.8rem",
            textTransform: "uppercase",
          }}
        >
          SHE’S ALMOST HERE.
        </h1>

        {/* Launch Date & Key Pillars Banner (Pink & Black Floating Glowing Badges) */}
        <div
          style={{
            display: "inline-flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "2.4rem",
            transform: isScrolling
              ? `rotate(${scrollTilt * 0.35}deg) translateY(${scrollTilt * 0.6}px)`
              : "none",
            transition: "transform 0.18s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
        >
          {/* 1. Official Launch Date Badge */}
          <div
            className="badge-pink-glow shake-on-hover badge-float-1"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.7rem",
              background: "linear-gradient(135deg, rgba(255, 46, 116, 0.3) 0%, rgba(255, 77, 128, 0.12) 100%)",
              color: "#FFFFFF",
              padding: "0.75rem 1.6rem",
              borderRadius: "9999px",
              cursor: "pointer",
            }}
          >
            <Calendar size={18} strokeWidth={2} color="#FF4D80" />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#FF9EBB" }}>
                OFFICIAL LAUNCH
              </div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", fontWeight: 600, letterSpacing: "0.06em", color: "#FFFFFF" }}>
                01 DECEMBER 2026
              </div>
            </div>
          </div>

          {/* 2. Store in Sector 18 GGN Badge */}
          <div
            className="badge-pink-glow shake-on-hover badge-float-2"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.65rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "9999px",
              cursor: "pointer",
            }}
          >
            <MapPin size={18} strokeWidth={2} color="#FF4D80" />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.22em", color: "#FF9EBB", textTransform: "uppercase" }}>
                FLAGSHIP STORE
              </div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.04em" }}>
                Sector 18 GGN
              </div>
            </div>
          </div>

          {/* 3. Store Phone Number (Click to call) */}
          <a
            href={brandConfig.store.phoneTel}
            className="badge-pink-glow shake-on-hover badge-float-3"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.65rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "9999px",
              textDecoration: "none",
            }}
          >
            <Phone size={17} strokeWidth={2} color="#FF4D80" />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.22em", color: "#FF9EBB", textTransform: "uppercase" }}>
                STORE NO.
              </div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.04em" }}>
                {brandConfig.store.phone}
              </div>
            </div>
          </a>

          {/* 4. Owners / Founders Badge */}
          <div
            className="badge-pink-glow shake-on-hover badge-float-4"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.65rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "9999px",
              cursor: "pointer",
            }}
          >
            <User size={17} strokeWidth={2} color="#FF4D80" />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.22em", color: "#FF9EBB", textTransform: "uppercase" }}>
                OWNERS
              </div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.92rem", fontWeight: 700, color: "#FFFFFF", letterSpacing: "0.04em" }}>
                {brandConfig.store.owners}
              </div>
            </div>
          </div>

          {/* 5. Instagram ID: sku.thelabel */}
          <a
            href={brandConfig.social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shake-on-hover badge-float-5"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.65rem",
              background: "linear-gradient(135deg, #FF2E74 0%, #FF4D80 100%)",
              color: "#FFFFFF",
              padding: "0.75rem 1.6rem",
              borderRadius: "9999px",
              textDecoration: "none",
              boxShadow: "0 8px 25px rgba(255, 46, 116, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            <InstagramIcon size={18} strokeWidth={2} color="#FFFFFF" />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.22em", color: "rgba(255, 255, 255, 0.9)", textTransform: "uppercase" }}>
                INSTAGRAM ID
              </div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", fontWeight: 800, color: "#FFFFFF", letterSpacing: "0.04em" }}>
                sku.thelabel
              </div>
            </div>
          </a>
        </div>

        {/* Live Dynamic Countdown Timer Display (Glowing pulse & scroll react) */}
        <div
          className="countdown-animated-box"
          style={{
            backgroundColor: "rgba(18, 15, 23, 0.88)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255, 77, 128, 0.45)",
            borderRadius: "22px",
            padding: "clamp(1.5rem, 3.5vw, 2.4rem) clamp(1rem, 3vw, 2.5rem)",
            marginBottom: "2.5rem",
            transform: isScrolling
              ? `rotate(${-scrollTilt * 0.25}deg) translateY(${scrollTilt * 0.5}px)`
              : "none",
            transition: "transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)",
          }}
        >
          {/* Status Header with Pulsing Radar Dot */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.6rem",
              marginBottom: "1.4rem",
              color: "#FF9EBB",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            <span
              className="radar-dot-pulse"
              style={{
                width: "9px",
                height: "9px",
                borderRadius: "50%",
                backgroundColor: "#FF2E74",
                display: "inline-block",
              }}
            />
            <Clock size={14} color="#FF4D80" />
            <span>LIVE COUNTDOWN TO OFFICIAL LAUNCH · 01 DEC 2026</span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "clamp(0.6rem, 2vw, 1.5rem)",
            }}
          >
            {[
              { label: "DAYS", value: timeLeft.days, key: "d" },
              { label: "HOURS", value: timeLeft.hours, key: "h" },
              { label: "MINUTES", value: timeLeft.minutes, key: "m" },
              { label: "SECONDS", value: timeLeft.seconds, key: "s", isSeconds: true },
            ].map((item, idx) => (
              <div
                key={idx}
                className="digit-card-active"
                style={{
                  backgroundColor: item.isSeconds ? "rgba(28, 20, 32, 0.95)" : "rgba(16, 13, 20, 0.88)",
                  border: item.isSeconds ? "1.5px solid #FF2E74" : "1px solid rgba(255, 77, 128, 0.3)",
                  borderRadius: "16px",
                  padding: "clamp(1rem, 2.2vw, 1.5rem) 0.5rem",
                  boxShadow: item.isSeconds
                    ? "0 8px 24px -4px rgba(255, 46, 116, 0.35)"
                    : "0 4px 16px rgba(0, 0, 0, 0.4)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Second progress meter at the top of the seconds card */}
                {item.isSeconds && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "3px",
                      width: `${((item.value % 60) / 60) * 100}%`,
                      backgroundColor: "#FF2E74",
                      boxShadow: "0 0 8px #FF2E74",
                      transition: "width 1s linear",
                    }}
                  />
                )}

                <div
                  key={`${item.key}-${item.value}`}
                  className={item.isSeconds ? "seconds-tick-anim" : ""}
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                    fontWeight: 600,
                    color: item.isSeconds ? "#FF2E74" : "#FFFFFF",
                    textShadow: item.isSeconds ? "0 0 16px rgba(255, 46, 116, 0.5)" : "none",
                    lineHeight: 1,
                    marginBottom: "0.35rem",
                  }}
                >
                  {String(item.value).padStart(2, "0")}
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(0.62rem, 1vw, 0.72rem)",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    color: item.isSeconds ? "#FF7597" : "#FF9EBB",
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VIP Early Access Notification Form (Pink & Black Theme) */}
        <div style={{ maxWidth: "540px", margin: "0 auto" }}>
          {submitted ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.75rem",
                backgroundColor: "rgba(22, 18, 26, 0.95)",
                border: "1px solid #FF4D80",
                padding: "1.1rem 1.5rem",
                borderRadius: "9999px",
                color: "#FFFFFF",
                boxShadow: "0 8px 30px rgba(255, 46, 116, 0.25)",
              }}
            >
              <CheckCircle2 size={20} color="#FF4D80" />
              <span style={{ fontSize: "0.92rem", fontWeight: 600, color: "#FFD2DF" }}>
                You are on the VIP guest list! We’ll notify you before launch.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ position: "relative" }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.6rem",
                  backgroundColor: "rgba(18, 15, 24, 0.95)",
                  padding: "0.45rem",
                  borderRadius: "9999px",
                  border: "1px solid rgba(255, 77, 128, 0.45)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 46, 116, 0.15)",
                }}
              >
                <input
                  type="text"
                  placeholder="Enter email or WhatsApp number..."
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  required
                  style={{
                    flex: 1,
                    minWidth: "220px",
                    border: "none",
                    outline: "none",
                    padding: "0.85rem 1.4rem",
                    fontSize: "0.92rem",
                    color: "#FFFFFF",
                    backgroundColor: "transparent",
                    fontFamily: "var(--font-sans)",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.55rem",
                    background: "linear-gradient(135deg, #FF2E74 0%, #FF4D80 100%)",
                    color: "#0A0A0C",
                    border: "none",
                    borderRadius: "9999px",
                    padding: "0.85rem 1.8rem",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    cursor: "pointer",
                    boxShadow: "0 4px 18px rgba(255, 46, 116, 0.45)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-1px) scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 6px 24px rgba(255, 46, 116, 0.7)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 4px 18px rgba(255, 46, 116, 0.45)";
                  }}
                >
                  <span>NOTIFY ME</span>
                  <Sparkles size={14} color="#0A0A0C" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
