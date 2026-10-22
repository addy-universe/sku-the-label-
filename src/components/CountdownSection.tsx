import React from "react";
import { Clock, CheckCircle2 } from "lucide-react";
import { brandConfig } from "../config/brandConfig";
import { useCountdown } from "../hooks/useCountdown";

export const CountdownSection: React.FC = () => {
  const { days, hours, minutes, seconds, isLive } = useCountdown(brandConfig.launchDateISO);

  const timeUnits = [
    { label: "DAYS", value: days },
    { label: "HOURS", value: hours },
    { label: "MINUTES", value: minutes },
    { label: "SECONDS", value: seconds },
  ];

  return (
    <section
      id="countdown"
      aria-label="Launch Countdown"
      style={{
        backgroundColor: "var(--color-soft-beige)",
        borderTop: "1px solid rgba(48, 36, 33, 0.08)",
        borderBottom: "1px solid rgba(48, 36, 33, 0.08)",
        paddingTop: "clamp(3.5rem, 6vw, 5.5rem)",
        paddingBottom: "clamp(3.5rem, 6vw, 5.5rem)",
        position: "relative",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        
        {/* Section Header */}
        <div style={{ maxWidth: "580px", margin: "0 auto clamp(2rem, 4vw, 3.5rem) auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
            <Clock size={14} color="var(--color-muted-taupe)" strokeWidth={1.5} />
            <span className="eyebrow" style={{ margin: 0 }}>
              COUNTDOWN TO LAUNCH
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)",
              fontWeight: 400,
              color: "var(--color-espresso)",
              marginBottom: "0.75rem",
              lineHeight: 1.2,
            }}
          >
            {isLive ? "THE WAIT IS OVER" : "Every Second Brings Us Closer"}
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9375rem",
              color: "var(--color-espresso-75)",
              fontWeight: 300,
            }}
          >
            {isLive
              ? "The doors to SKU THE LABEL are officially open."
              : `Official online release scheduled for 01 December 2026, 12:00 AM (${brandConfig.launchTimezone}).`}
          </p>
        </div>

        {/* Live Countdown Display OR Launch-Day Message */}
        {isLive ? (
          <div
            style={{
              maxWidth: "680px",
              margin: "0 auto",
              padding: "2.5rem 2rem",
              backgroundColor: "var(--color-warm-ivory)",
              border: "1px solid var(--color-dusty-rose)",
              boxShadow: "var(--shadow-editorial)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
              <CheckCircle2 size={36} color="var(--color-espresso)" strokeWidth={1.5} />
            </div>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                letterSpacing: "0.06em",
                color: "var(--color-espresso)",
                marginBottom: "0.75rem",
              }}
            >
              WE'RE LIVE. YOUR NEW FAVOURITES ARE HERE.
            </h3>
            <p style={{ color: "var(--color-espresso-75)", marginBottom: "1.75rem", fontWeight: 300 }}>
              Explore the debut collection and elevate your everyday wardrobe.
            </p>
            <a href="#collections" className="btn-primary">
              EXPLORE DEBUT COLLECTION
            </a>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "clamp(0.75rem, 2vw, 1.75rem)",
              maxWidth: "880px",
              margin: "0 auto",
            }}
            className="countdown-grid"
          >
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                style={{
                  backgroundColor: "var(--color-warm-ivory)",
                  border: "1px solid rgba(48, 36, 33, 0.12)",
                  padding: "clamp(1.5rem, 3.5vw, 2.5rem) 1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 20px -6px rgba(48, 36, 33, 0.06)",
                  position: "relative",
                  transition: "transform 0.3s ease, border-color 0.3s ease",
                }}
                className="countdown-card"
              >
                {/* Subtle top border accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "25%",
                    right: "25%",
                    height: "2px",
                    backgroundColor: "var(--color-dusty-rose)",
                  }}
                />

                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2.75rem, 6.5vw, 5rem)",
                    fontWeight: 400,
                    color: "var(--color-espresso)",
                    lineHeight: 1,
                    marginBottom: "0.6rem",
                    fontVariantNumeric: "tabular-nums",
                  }}
                  id={`countdown-${unit.label.toLowerCase()}`}
                >
                  {String(unit.value).padStart(2, "0")}
                </span>

                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(0.68rem, 1.1vw, 0.8rem)",
                    fontWeight: 600,
                    letterSpacing: "0.22em",
                    color: "var(--color-muted-taupe)",
                    textTransform: "uppercase",
                  }}
                >
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Timezone & Precision Assurance */}
        <div
          style={{
            marginTop: "clamp(1.75rem, 3vw, 2.75rem)",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            fontSize: "0.78rem",
            color: "var(--color-muted-taupe)",
          }}
        >
          <span>TIMEZONE: {brandConfig.launchTimezone}</span>
          <span style={{ opacity: 0.4 }}>•</span>
          <span>CALCULATED IN REAL TIME</span>
        </div>
      </div>

      <style>{`
        @media (min-width: 680px) {
          .countdown-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        .countdown-card:hover {
          transform: translateY(-3px);
          border-color: var(--color-dusty-rose);
        }
      `}</style>
    </section>
  );
};
