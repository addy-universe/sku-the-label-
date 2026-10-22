import React, { useState } from "react";
import { X, Mail, Phone, MessageCircle, Copy, Check } from "lucide-react";
import { brandConfig } from "../config/brandConfig";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(brandConfig.contact.supportEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappUrl = `https://wa.me/${brandConfig.social.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    brandConfig.social.whatsappMessage
  )}`;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "560px",
          backgroundColor: "#110D15",
          border: "1px solid rgba(255, 77, 128, 0.4)",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(255, 46, 116, 0.2)",
          color: "#FFFFFF",
          borderRadius: "16px",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem", borderBottom: "1px solid rgba(255, 77, 128, 0.2)", paddingBottom: "1rem" }}>
          <div>
            <span className="eyebrow" style={{ margin: 0, color: "var(--color-hot-pink)" }}>CLIENT CONCIERGE</span>
            <h3
              id="contact-modal-title"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.85rem",
                color: "#FFFFFF",
                marginTop: "0.25rem",
              }}
            >
              Get in Touch
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

        <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.75)", marginBottom: "2rem", fontWeight: 300, lineHeight: 1.6 }}>
          For press previews, editorial collaborations, or early access assistance, our team is at your service.
        </p>

        {/* Contact Methods */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
          
          {/* Flagship Store & Owners Info */}
          <div
            style={{
              padding: "1.1rem 1.25rem",
              backgroundColor: "rgba(255, 46, 116, 0.08)",
              border: "1px solid rgba(255, 77, 128, 0.35)",
              borderRadius: "12px",
            }}
          >
            <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", color: "var(--color-hot-pink)", textTransform: "uppercase", marginBottom: "0.4rem" }}>
              FLAGSHIP STORE LOCATION
            </div>
            <div style={{ fontSize: "0.95rem", fontWeight: 600, color: "#FFFFFF", marginBottom: "0.25rem" }}>
              {brandConfig.store.address}
            </div>
            <div style={{ fontSize: "0.82rem", color: "rgba(255, 255, 255, 0.75)" }}>
              Owners & Curators: <strong style={{ color: "var(--color-blush-pink)" }}>{brandConfig.store.owners}</strong>
            </div>
          </div>

          {/* Direct Phone Call */}
          <a
            href={brandConfig.store.phoneTel}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem 1.25rem",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 77, 128, 0.2)",
              borderRadius: "10px",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", backgroundColor: "rgba(255, 46, 116, 0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Phone size={18} color="var(--color-hot-pink)" />
              </div>
              <div>
                <span style={{ fontSize: "0.68rem", letterSpacing: "0.14em", color: "var(--color-blush-pink)", display: "block" }}>
                  STORE NO. / DIRECT CALL
                </span>
                <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#FFFFFF" }}>
                  {brandConfig.store.phoneDisplay}
                </span>
              </div>
            </div>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--color-hot-pink)", textDecoration: "underline" }}>
              CALL NOW
            </span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem 1.25rem",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 77, 128, 0.2)",
              borderRadius: "10px",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", backgroundColor: "rgba(37, 211, 102, 0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <MessageCircle size={18} color="#25D366" />
              </div>
              <div>
                <span style={{ fontSize: "0.68rem", letterSpacing: "0.14em", color: "var(--color-blush-pink)", display: "block" }}>
                  WHATSAPP CONCIERGE (STORE NO)
                </span>
                <span style={{ fontSize: "0.92rem", fontWeight: 600, color: "#FFFFFF" }}>
                  {brandConfig.social.whatsappDisplay}
                </span>
              </div>
            </div>
            <span style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", color: "var(--color-hot-pink)", textDecoration: "underline" }}>
              CHAT
            </span>
          </a>

          {/* Email Support */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "1rem 1.25rem",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 77, 128, 0.2)",
              borderRadius: "10px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", backgroundColor: "rgba(255, 46, 116, 0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Mail size={18} color="var(--color-hot-pink)" />
              </div>
              <div>
                <span style={{ fontSize: "0.68rem", letterSpacing: "0.14em", color: "var(--color-blush-pink)", display: "block" }}>
                  CONCIERGE & GENERAL INQUIRIES
                </span>
                <span style={{ fontSize: "0.92rem", fontWeight: 600, color: "#FFFFFF" }}>
                  {brandConfig.contact.supportEmail}
                </span>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              aria-label="Copy support email address"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                padding: "0.45rem 0.75rem",
                background: "rgba(255, 46, 116, 0.15)",
                border: "1px solid rgba(255, 77, 128, 0.4)",
                borderRadius: "6px",
                fontSize: "0.72rem",
                cursor: "pointer",
                color: "#FFFFFF",
                fontWeight: 600,
              }}
            >
              {copied ? <Check size={14} color="#25D366" /> : <Copy size={14} />}
              <span>{copied ? "COPIED" : "COPY"}</span>
            </button>
          </div>
        </div>

        <button type="button" className="btn-primary" onClick={onClose} style={{ width: "100%" }}>
          CLOSE
        </button>
      </div>
    </div>
  );
};

