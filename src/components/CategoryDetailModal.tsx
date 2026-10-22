import React from "react";
import { X, Check, BellRing } from "lucide-react";
import type { CategoryPreview } from "../config/brandConfig";

interface CategoryDetailModalProps {
  category: CategoryPreview | null;
  onClose: () => void;
  onSelectCategoryForWaitlist: (categoryName: string) => void;
}

export const CategoryDetailModal: React.FC<CategoryDetailModalProps> = ({
  category,
  onClose,
  onSelectCategoryForWaitlist,
}) => {
  if (!category) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-category-title"
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "680px", padding: "0", overflow: "hidden" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            background: "rgba(245, 237, 230, 0.9)",
            border: "1px solid rgba(48, 36, 33, 0.15)",
            padding: "0.5rem",
            cursor: "pointer",
            color: "var(--color-espresso)",
            zIndex: 10,
          }}
        >
          <X size={20} strokeWidth={1.5} />
        </button>

        <div style={{ display: "grid", gridTemplateColumns: "1fr" }} className="modal-inner-grid">
          {/* Category Image Header */}
          <div style={{ height: "280px", position: "relative", overflow: "hidden", backgroundColor: "var(--color-soft-beige)" }}>
            <img
              src={category.image}
              alt={category.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(48, 36, 33, 0.7) 0%, transparent 60%)",
              }}
            />
            <div style={{ position: "absolute", bottom: "1.25rem", left: "1.5rem", color: "var(--color-warm-ivory)" }}>
              <span
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.2em",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "var(--color-dusty-rose)",
                  display: "block",
                  marginBottom: "0.25rem",
                }}
              >
                UPCOMING COLLECTION PREVIEW
              </span>
              <h3
                id="modal-category-title"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2rem",
                  color: "var(--color-warm-ivory)",
                  fontWeight: 400,
                }}
              >
                {category.name}
              </h3>
            </div>
          </div>

          {/* Modal Details Content */}
          <div style={{ padding: "clamp(1.5rem, 4vw, 2.5rem)" }}>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.2rem",
                fontStyle: "italic",
                color: "var(--color-espresso)",
                marginBottom: "1rem",
              }}
            >
              "{category.tagline}"
            </p>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9375rem",
                lineHeight: 1.65,
                color: "var(--color-espresso-75)",
                fontWeight: 300,
                marginBottom: "1.5rem",
              }}
            >
              {category.description}
            </p>

            {/* Design Highlights */}
            <div style={{ marginBottom: "2rem" }}>
              <h4
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-muted-taupe)",
                  marginBottom: "0.85rem",
                }}
              >
                DESIGN & CRAFT HIGHLIGHTS
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {category.highlights.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.65rem",
                      fontSize: "0.88rem",
                      color: "var(--color-espresso)",
                    }}
                  >
                    <Check size={16} color="var(--color-espresso)" strokeWidth={2} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  onSelectCategoryForWaitlist(category.name);
                  onClose();
                }}
                style={{ flex: 1 }}
              >
                <BellRing size={16} strokeWidth={1.5} />
                <span>NOTIFY ME FOR THIS LINE</span>
              </button>

              <button
                type="button"
                className="btn-secondary"
                onClick={onClose}
              >
                BACK TO PREVIEWS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
