import React from "react";
import { X, Shield, FileText } from "lucide-react";
import { brandConfig } from "../config/brandConfig";

interface LegalModalProps {
  type: "privacy" | "terms" | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms & Conditions";

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "620px",
          backgroundColor: "#110D15",
          border: "1px solid rgba(255, 77, 128, 0.4)",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(255, 46, 116, 0.2)",
          color: "#FFFFFF",
          borderRadius: "16px",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.75rem", borderBottom: "1px solid rgba(255, 77, 128, 0.2)", paddingBottom: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            {isPrivacy ? <Shield size={20} color="var(--color-hot-pink)" /> : <FileText size={20} color="var(--color-hot-pink)" />}
            <h3
              id="legal-modal-title"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.75rem",
                color: "#FFFFFF",
              }}
            >
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 77, 128, 0.3)",
              borderRadius: "50%",
              width: "34px",
              height: "34px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#FFFFFF",
              transition: "all 0.2s ease",
            }}
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        {/* Legal Text Content */}
        <div
          style={{
            fontSize: "0.88rem",
            lineHeight: 1.7,
            color: "rgba(255, 255, 255, 0.75)",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
          }}
        >
          {isPrivacy ? (
            <>
              <p>
                At <strong style={{ color: "var(--color-hot-pink)" }}>{brandConfig.brandName}</strong>, we hold your trust and digital privacy in the highest regard. This policy outlines how information gathered during our launch countdown and early-access registration is handled.
              </p>
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "#FFFFFF" }}>
                Information We Collect
              </h4>
              <p>
                When you sign up for early access, we collect your email address and optional first name solely for the purpose of notifying you about our upcoming launch on 1 December 2026 and providing your private shopping reservation.
              </p>
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "#FFFFFF" }}>
                Data Protection & Consent
              </h4>
              <p>
                We will never sell, rent, or trade your contact information with external parties for marketing purposes. You may opt out or request complete deletion of your registration at any time by contacting our concierge at{" "}
                <a href={`mailto:${brandConfig.contact.supportEmail}`} style={{ color: "var(--color-hot-pink)", textDecoration: "underline" }}>
                  {brandConfig.contact.supportEmail}
                </a>.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong style={{ color: "var(--color-hot-pink)" }}>{brandConfig.brandName}</strong>. By accessing our coming-soon website and registering for early access, you agree to the following terms.
              </p>
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "#FFFFFF" }}>
                Launch Preview & Availability
              </h4>
              <p>
                All brand identity details and previews featured on this website are upcoming for our debut release scheduled for 1 December 2026. Sizing, final fabric specifications, and INR (₹) retail prices will be revealed upon official launch.
              </p>
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", color: "#FFFFFF" }}>
                Intellectual Property
              </h4>
              <p>
                All brand identity assets and editorial design elements remain the exclusive intellectual property of {brandConfig.brandName}.
              </p>
            </>
          )}

          <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid rgba(255, 77, 128, 0.2)", display: "flex", justifyContent: "flex-end" }}>
            <button type="button" className="btn-primary" onClick={onClose} style={{ padding: "0.75rem 1.75rem", fontSize: "0.75rem" }}>
              UNDERSTOOD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

