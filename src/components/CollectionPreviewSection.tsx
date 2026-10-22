import React from "react";
import { ArrowUpRight, Eye } from "lucide-react";
import { brandConfig } from "../config/brandConfig";
import type { CategoryPreview } from "../config/brandConfig";

interface CollectionPreviewSectionProps {
  onOpenCategory: (category: CategoryPreview) => void;
}

export const CollectionPreviewSection: React.FC<CollectionPreviewSectionProps> = ({
  onOpenCategory,
}) => {
  return (
    <section
      id="collections"
      aria-label="Upcoming Collections Preview"
      className="section-editorial"
      style={{
        backgroundColor: "var(--color-warm-ivory)",
        borderBottom: "1px solid rgba(48, 36, 33, 0.08)",
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "680px",
            margin: "0 auto clamp(2.5rem, 5vw, 4.5rem) auto",
          }}
        >
          <span className="eyebrow">UPCOMING RELEASES</span>
          <h2 className="section-headline" style={{ marginBottom: "1rem" }}>
            The Debut Wardrobe
          </h2>
          <p className="lead-text">
            A preview of the foundational silhouettes launching with SKU THE LABEL. Meticulously cut in neutral palettes for modern Indian women.
          </p>
        </div>

        {/* Collections Editorial Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(1.5rem, 3vw, 2.5rem)",
          }}
          className="collections-grid"
        >
          {brandConfig.categories.map((category, index) => (
            <div
              key={category.id}
              className="collection-card"
              onClick={() => onOpenCategory(category)}
              role="button"
              tabIndex={0}
              aria-label={`Preview upcoming ${category.name} collection`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onOpenCategory(category);
                }
              }}
            >
              <div className="collection-card-img-wrapper">
                <img
                  src={category.image}
                  alt={`${category.name} preview by SKU THE LABEL`}
                  className="collection-card-img"
                  loading="lazy"
                  width={600}
                  height={800}
                />
                
                {/* Visual Gradient Overlay */}
                <div className="collection-card-overlay" />

                {/* Top Badge: Preview Only */}
                <div
                  style={{
                    position: "absolute",
                    top: "1.2rem",
                    left: "1.2rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    backgroundColor: "rgba(245, 237, 230, 0.95)",
                    padding: "0.35rem 0.75rem",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    color: "var(--color-espresso)",
                    textTransform: "uppercase",
                  }}
                >
                  <span>COMING 01.12.26</span>
                </div>

                {/* Hover Reveal Button */}
                <div
                  style={{
                    position: "absolute",
                    top: "1.2rem",
                    right: "1.2rem",
                    backgroundColor: "var(--color-espresso)",
                    color: "var(--color-warm-ivory)",
                    padding: "0.45rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.3s ease",
                  }}
                  className="card-quick-preview-btn"
                  title="View silhouette notes"
                >
                  <Eye size={16} strokeWidth={1.5} />
                </div>

                {/* Bottom Editorial Content */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    color: "var(--color-warm-ivory)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      letterSpacing: "0.22em",
                      color: "var(--color-dusty-rose)",
                      textTransform: "uppercase",
                      marginBottom: "0.25rem",
                    }}
                  >
                    COLLECTION 0{index + 1}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(1.4rem, 2.2vw, 1.85rem)",
                        color: "var(--color-warm-ivory)",
                        fontWeight: 400,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {category.name}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        fontSize: "0.75rem",
                        letterSpacing: "0.1em",
                        fontWeight: 500,
                        color: "var(--color-warm-ivory)",
                      }}
                    >
                      <span>DISCOVER</span>
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Preview Status */}
        <div
          style={{
            marginTop: "clamp(2.5rem, 5vw, 4rem)",
            textAlign: "center",
            padding: "1.5rem",
            backgroundColor: "var(--color-soft-beige)",
            border: "1px solid rgba(48, 36, 33, 0.08)",
            maxWidth: "780px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.82rem",
              letterSpacing: "0.08em",
              color: "var(--color-espresso-75)",
              fontWeight: 400,
            }}
          >
            NOTE: All items pictured above are upcoming release silhouettes. Official sizing, fabric compositions, and INR (₹) pricing will be revealed exclusively to waitlist members on launch day.
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .collections-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .collections-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          /* Fifth item can span or display elegantly */
          .collections-grid > :nth-child(4) {
            grid-column: span 1;
          }
          .collections-grid > :nth-child(5) {
            grid-column: span 2;
          }
        }
        @media (min-width: 1200px) {
          /* Full luxury 5-card layout option */
          .collections-grid {
            grid-template-columns: repeat(6, 1fr) !important;
          }
          .collections-grid > :nth-child(1),
          .collections-grid > :nth-child(2),
          .collections-grid > :nth-child(3) {
            grid-column: span 2;
          }
          .collections-grid > :nth-child(4),
          .collections-grid > :nth-child(5) {
            grid-column: span 3;
          }
        }
      `}</style>
    </section>
  );
};
