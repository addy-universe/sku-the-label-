import React from "react";
import { Compass, Sparkles, Feather } from "lucide-react";

export const BrandStorySection: React.FC = () => {
  const storyPillars = [
    {
      icon: Feather,
      title: "Effortless Silhouette",
      text: "Designed to drape naturally and move with ease throughout your day, from morning routines to evening pauses.",
    },
    {
      icon: Sparkles,
      title: "Everyday Confidence",
      text: "Understated pieces that don't demand attention, but elevate the woman wearing them with quiet luxury.",
    },
    {
      icon: Compass,
      title: "Thoughtful Curation",
      text: "A cohesive wardrobe system in warm ivories, dusty roses, and rich espresso browns that effortlessly pair together.",
    },
  ];

  return (
    <section
      id="about"
      aria-label="Brand Story and Vision"
      className="section-editorial"
      style={{
        backgroundColor: "var(--color-warm-ivory)",
        borderBottom: "1px solid rgba(48, 36, 33, 0.08)",
      }}
    >
      <div className="container">
        
        {/* Asymmetrical Editorial Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(3rem, 6vw, 6rem)",
            alignItems: "center",
          }}
          className="brand-story-grid"
        >
          {/* Visual Column: Art-Directed Editorial Photograph */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                backgroundColor: "var(--color-soft-beige)",
                boxShadow: "var(--shadow-editorial)",
              }}
            >
              <img
                src="/images/brand-story.jpg"
                alt="SKU THE LABEL founders and editorial muse in contemporary neutral tailoring"
                width={1000}
                height={750}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                  aspectRatio: "4 / 3",
                }}
                loading="lazy"
              />

              {/* Decorative Corner Label */}
              <div
                style={{
                  position: "absolute",
                  top: "1.25rem",
                  left: "1.25rem",
                  backgroundColor: "rgba(245, 237, 230, 0.94)",
                  padding: "0.45rem 0.85rem",
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  color: "var(--color-espresso)",
                  textTransform: "uppercase",
                  border: "1px solid rgba(48, 36, 33, 0.1)",
                }}
              >
                THE ATELIER VISION
              </div>
            </div>

            {/* Overlapping Quote Callout */}
            <div
              style={{
                backgroundColor: "var(--color-soft-beige)",
                border: "1px solid var(--color-dusty-rose)",
                padding: "clamp(1.25rem, 3vw, 2rem)",
                maxWidth: "380px",
                position: "absolute",
                bottom: "-2rem",
                right: "-1rem",
                boxShadow: "var(--shadow-editorial)",
                display: "none",
              }}
              className="editorial-overlap-quote"
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.125rem",
                  fontStyle: "italic",
                  color: "var(--color-espresso)",
                  lineHeight: 1.4,
                  marginBottom: "0.5rem",
                }}
              >
                "Clothes should never complicate her life. They should feel like second nature."
              </p>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.68rem",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  color: "var(--color-muted-taupe)",
                  textTransform: "uppercase",
                }}
              >
                SKU THE LABEL EDITORIAL NOTE
              </span>
            </div>
          </div>

          {/* Text Column: Editorial Narrative & Principles */}
          <div style={{ display: "flex", flexDirection: "column" }} id="vision">
            <span className="eyebrow">OUR PHILOSOPHY</span>

            <h2
              className="section-headline"
              style={{
                marginBottom: "1.75rem",
                color: "var(--color-espresso)",
              }}
            >
              MADE FOR HER. <br />
              <span style={{ fontStyle: "italic", fontWeight: 300 }}>MADE FOR EVERY DAY.</span>
            </h2>

            <p
              className="lead-text"
              style={{
                marginBottom: "2.5rem",
                color: "var(--color-espresso-90)",
              }}
            >
              From the essentials you reach for every morning to the pieces that make you feel unstoppable, SKU THE LABEL is bringing together modern women's style and everyday confidence. A new wardrobe story starts here.
            </p>

            {/* Pillars Grid */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(48, 36, 33, 0.12)",
              }}
            >
              {storyPillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    style={{
                      display: "flex",
                      gap: "1.2rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        padding: "0.6rem",
                        backgroundColor: "var(--color-soft-beige)",
                        border: "1px solid rgba(217, 170, 168, 0.4)",
                        color: "var(--color-espresso)",
                        flexShrink: 0,
                        marginTop: "0.2rem",
                      }}
                    >
                      <IconComponent size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "1.25rem",
                          marginBottom: "0.3rem",
                          color: "var(--color-espresso)",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {pillar.title}
                      </h4>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.88rem",
                          lineHeight: 1.6,
                          color: "var(--color-espresso-75)",
                          fontWeight: 300,
                        }}
                      >
                        {pillar.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: "2.5rem" }}>
              <a href="#collections" className="btn-secondary">
                EXPLORE UPCOMING COLLECTIONS
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .brand-story-grid {
            grid-template-columns: 1.05fr 1fr !important;
          }
          .editorial-overlap-quote {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
};
