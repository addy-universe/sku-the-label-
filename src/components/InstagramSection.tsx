import React from "react";
import { ArrowUpRight } from "lucide-react";
import { brandConfig } from "../config/brandConfig";
import { InstagramIcon } from "./InstagramIcon";

export const InstagramSection: React.FC = () => {
  const editorialMoments = [
    {
      id: "moment-1",
      image: "/images/ig-detail-1.jpg",
      tag: "THE COLLAR DETAIL",
      caption: "Fine gold resting against breathable ivory mulberry silk.",
    },
    {
      id: "moment-2",
      image: "/images/ig-fabrics-2.jpg",
      tag: "TACTILE ATELIER",
      caption: "Swatches of modal rib, soft cashmere, and fluid dusty rose silk.",
    },
    {
      id: "moment-3",
      image: "/images/ig-lifestyle-3.jpg",
      tag: "THE MORNING RITUAL",
      caption: "A quiet espresso pause before the rhythm of the day unfolds.",
    },
    {
      id: "moment-4",
      image: "/images/ig-moment-4.jpg",
      tag: "HER CONFIDENCE",
      caption: "Effortless tailoring made for Indian women who own every room.",
    },
  ];

  return (
    <section
      id="instagram"
      aria-label="Instagram Journal"
      className="section-editorial"
      style={{
        backgroundColor: "var(--color-warm-ivory)",
        borderBottom: "1px solid rgba(48, 36, 33, 0.08)",
      }}
    >
      <div className="container">
        
        {/* Section Header with Instagram CTA */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "640px",
            margin: "0 auto clamp(2.5rem, 5vw, 4rem) auto",
          }}
        >
          <span className="eyebrow">VISUAL DIARY</span>
          <h2 className="section-headline" style={{ marginBottom: "1rem" }}>
            FOLLOW THE STORY.
          </h2>
          <p className="lead-text" style={{ marginBottom: "2rem" }}>
            Behind the seams, studio moods, and glimpses into the upcoming world of SKU THE LABEL.
          </p>

          <a
            href={brandConfig.social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            id="instagram-profile-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.95rem 2rem",
            }}
          >
            <InstagramIcon size={17} strokeWidth={1.5} />
            <span>JOIN US ON INSTAGRAM</span>
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* 4-Image Editorial Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "clamp(0.75rem, 2vw, 1.75rem)",
          }}
          className="instagram-grid"
        >
          {editorialMoments.map((moment) => (
            <a
              key={moment.id}
              href={brandConfig.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View Instagram post: ${moment.tag}`}
              style={{
                position: "relative",
                aspectRatio: "1 / 1",
                overflow: "hidden",
                backgroundColor: "var(--color-soft-beige)",
                display: "block",
                border: "1px solid rgba(48, 36, 33, 0.08)",
              }}
              className="ig-card"
            >
              <img
                src={moment.image}
                alt={moment.caption}
                width={500}
                height={500}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
                className="ig-img"
                loading="lazy"
              />

              {/* Hover Dark Overlay with Editorial Info */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(48, 36, 33, 0.75)",
                  backdropFilter: "blur(2px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "clamp(1rem, 2.5vw, 1.75rem)",
                  opacity: 0,
                  transition: "opacity 0.35s ease",
                  color: "var(--color-warm-ivory)",
                }}
                className="ig-overlay"
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      letterSpacing: "0.2em",
                      color: "var(--color-dusty-rose)",
                      textTransform: "uppercase",
                    }}
                  >
                    {moment.tag}
                  </span>
                  <InstagramIcon size={18} strokeWidth={1.5} color="var(--color-warm-ivory)" />
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(0.95rem, 1.4vw, 1.25rem)",
                      lineHeight: 1.35,
                      color: "var(--color-warm-ivory)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    "{moment.caption}"
                  </p>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      color: "var(--color-dusty-rose)",
                    }}
                  >
                    VIEW ON INSTAGRAM <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .instagram-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
        .ig-card:hover .ig-img {
          transform: scale(1.06);
        }
        .ig-card:hover .ig-overlay {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};
