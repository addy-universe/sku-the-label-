import React, { useState, useEffect } from "react";
import { Mail, CheckCircle2, MessageCircle, CalendarPlus, ShieldCheck, Sparkles, AlertCircle } from "lucide-react";
import { brandConfig } from "../config/brandConfig";

interface EarlyAccessSectionProps {
  selectedCategoryPreference?: string;
}

export const EarlyAccessSection: React.FC<EarlyAccessSectionProps> = ({
  selectedCategoryPreference,
}) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [preferredCategory, setPreferredCategory] = useState(selectedCategoryPreference || "all");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [vipNumber, setVipNumber] = useState("");

  // Sync preference if updated from modal
  useEffect(() => {
    if (selectedCategoryPreference) {
      setPreferredCategory(selectedCategoryPreference);
    }
  }, [selectedCategoryPreference]);

  // Check localStorage for existing VIP signup
  useEffect(() => {
    try {
      const stored = localStorage.getItem("sku_early_access_user");
      if (stored) {
        const parsed = JSON.parse(stored);
        setEmail(parsed.email || "");
        setFirstName(parsed.firstName || "");
        setVipNumber(parsed.vipNumber || "SKU-VIP-0182");
        setStatus("success");
      }
    } catch {
      // LocalStorage access fallback
    }
  }, []);

  const validateEmail = (input: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.trim());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your email address to receive priority access.");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address (e.g., name@example.com).");
      return;
    }

    setStatus("submitting");

    // Realistic API integration simulation
    setTimeout(() => {
      const generatedVipNum = `SKU-VIP-${Math.floor(1000 + Math.random() * 9000)}`;
      setVipNumber(generatedVipNum);
      setStatus("success");

      try {
        localStorage.setItem(
          "sku_early_access_user",
          JSON.stringify({
            email: email.trim(),
            firstName: firstName.trim(),
            category: preferredCategory,
            vipNumber: generatedVipNum,
            registeredAt: new Date().toISOString(),
          })
        );
      } catch {
        // Safe storage fallback
      }
    }, 600);
  };

  const handleReset = () => {
    localStorage.removeItem("sku_early_access_user");
    setEmail("");
    setFirstName("");
    setStatus("idle");
    setErrorMessage("");
  };

  const whatsappUrl = `https://wa.me/${brandConfig.social.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    brandConfig.social.whatsappMessage
  )}`;

  // Google Calendar Reminder Generator for 1 Dec 2026, 12:00 AM IST
  // 1 Dec 2026 00:00 IST = 30 Nov 2026 18:30 UTC
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=SKU+THE+LABEL+%E2%80%94+Official+Launch&dates=20261130T183000Z/20261130T203000Z&details=SKU+THE+LABEL+is+officially+live.+Explore+the+debut+wardrobe+at+https://skuthelabel.com&location=Online`;

  return (
    <section
      id="early-access"
      aria-label="Early Access Waitlist"
      className="section-editorial"
      style={{
        backgroundColor: "var(--color-soft-beige)",
        borderBottom: "1px solid rgba(48, 36, 33, 0.08)",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: "780px",
            margin: "0 auto",
            backgroundColor: "var(--color-warm-ivory)",
            border: "1px solid rgba(48, 36, 33, 0.12)",
            padding: "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3.5rem)",
            boxShadow: "var(--shadow-editorial)",
            position: "relative",
          }}
        >
          {/* Subtle Corner Accent */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              backgroundColor: "var(--color-espresso)",
            }}
          />

          {status === "success" ? (
            /* Success VIP Confirmation State */
            <div style={{ textAlign: "center", padding: "1rem 0" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  backgroundColor: "var(--color-soft-beige)",
                  border: "1px solid var(--color-dusty-rose)",
                  marginBottom: "1.25rem",
                  color: "var(--color-espresso)",
                }}
              >
                <CheckCircle2 size={30} strokeWidth={1.5} />
              </div>

              <span className="eyebrow" style={{ color: "var(--color-espresso)" }}>
                YOU ARE ON THE VIP GUEST LIST
              </span>

              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  color: "var(--color-espresso)",
                  marginBottom: "1rem",
                }}
              >
                Welcome to SKU THE LABEL{firstName ? `, ${firstName}` : ""}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.95rem",
                  color: "var(--color-espresso-75)",
                  maxWidth: "520px",
                  margin: "0 auto 2rem auto",
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                We have reserved your early access invitation for <strong>{email}</strong>. You will receive private 2-hour early shopping access before the public release on 01 December 2026.
              </p>

              {/* VIP Card Badge */}
              <div
                style={{
                  backgroundColor: "var(--color-soft-beige)",
                  border: "1px solid var(--color-dusty-rose)",
                  padding: "1.25rem",
                  maxWidth: "360px",
                  margin: "0 auto 2.5rem auto",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: "0 4px 12px rgba(48, 36, 33, 0.05)",
                }}
              >
                <div style={{ textAlign: "left" }}>
                  <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--color-muted-taupe)", display: "block" }}>
                    PASS NUMBER
                  </span>
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", fontWeight: 600, color: "var(--color-espresso)" }}>
                    {vipNumber}
                  </span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--color-muted-taupe)", display: "block" }}>
                    LAUNCH STATUS
                  </span>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-espresso)", letterSpacing: "0.1em" }}>
                    VIP PRIORITY
                  </span>
                </div>
              </div>

              {/* Actions: Add to Calendar & WhatsApp Support */}
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <a
                  href={calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem" }}
                >
                  <CalendarPlus size={16} strokeWidth={1.5} />
                  <span>ADD TO CALENDAR</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ fontSize: "0.75rem" }}
                >
                  <MessageCircle size={16} strokeWidth={1.5} />
                  <span>RECEIVE WHATSAPP REMINDER</span>
                </a>
              </div>

              <button
                type="button"
                onClick={handleReset}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--color-muted-taupe)",
                  fontSize: "0.75rem",
                  textDecoration: "underline",
                  cursor: "pointer",
                  marginTop: "1rem",
                }}
              >
                Register another email address
              </button>
            </div>
          ) : (
            /* Signup Form State */
            <div>
              <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                <span className="eyebrow">PRIVATE INVITATION</span>
                <h2
                  className="section-headline"
                  style={{
                    marginBottom: "1rem",
                    color: "var(--color-espresso)",
                  }}
                >
                  BE FIRST IN LINE.
                </h2>
                <p
                  className="lead-text"
                  style={{
                    maxWidth: "520px",
                    margin: "0 auto",
                  }}
                >
                  Get early access to our launch and be the first to discover SKU THE LABEL.
                </p>
              </div>

              {status === "error" && (
                <div
                  role="alert"
                  style={{
                    backgroundColor: "#FDF2F2",
                    border: "1px solid var(--color-dusty-rose)",
                    padding: "0.85rem 1.25rem",
                    marginBottom: "1.75rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    color: "#842029",
                    fontSize: "0.88rem",
                  }}
                >
                  <AlertCircle size={18} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "1.25rem",
                    marginBottom: "1.5rem",
                  }}
                  className="form-grid"
                >
                  {/* First Name Field (Optional) */}
                  <div>
                    <label
                      htmlFor="early-access-name"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--color-muted-taupe)",
                        marginBottom: "0.45rem",
                      }}
                    >
                      First Name <span style={{ fontWeight: 400, opacity: 0.7 }}>(Optional)</span>
                    </label>
                    <input
                      id="early-access-name"
                      type="text"
                      className="input-editorial"
                      placeholder="e.g., Ananya"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      disabled={status === "submitting"}
                    />
                  </div>

                  {/* Email Field (Required) */}
                  <div>
                    <label
                      htmlFor="early-access-email"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--color-espresso)",
                        marginBottom: "0.45rem",
                      }}
                    >
                      Email Address <span style={{ color: "var(--color-dusty-rose)" }}>*</span>
                    </label>
                    <div style={{ position: "relative" }}>
                      <input
                        id="early-access-email"
                        type="email"
                        required
                        className="input-editorial"
                        placeholder="yourname@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={status === "submitting"}
                        aria-required="true"
                      />
                      <Mail
                        size={18}
                        style={{
                          position: "absolute",
                          right: "1.1rem",
                          top: "50%",
                          transform: "translateY(-50%)",
                          color: "var(--color-muted-taupe)",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                  </div>

                  {/* Category Preference Selector */}
                  <div>
                    <label
                      htmlFor="category-preference"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--color-muted-taupe)",
                        marginBottom: "0.45rem",
                      }}
                    >
                      Primary Interest <span style={{ fontWeight: 400, opacity: 0.7 }}>(Optional)</span>
                    </label>
                    <select
                      id="category-preference"
                      value={preferredCategory}
                      onChange={(e) => setPreferredCategory(e.target.value)}
                      className="input-editorial"
                      style={{ cursor: "pointer" }}
                      disabled={status === "submitting"}
                    >
                      <option value="all">The Full Debut Collection</option>
                      <option value="Lingerie & Bras">Lingerie & Bras</option>
                      <option value="Tops & Shirts">Tops & Shirts</option>
                      <option value="Denim & Jeans">Denim & Jeans</option>
                      <option value="Dresses">Dresses</option>
                      <option value="Everyday Essentials">Everyday Essentials</option>
                    </select>
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  id="early-access-submit"
                  className="btn-primary"
                  disabled={status === "submitting"}
                  style={{
                    width: "100%",
                    padding: "1.2rem",
                    fontSize: "0.85rem",
                    marginBottom: "1.75rem",
                  }}
                >
                  <Sparkles size={16} strokeWidth={1.5} />
                  <span>{status === "submitting" ? "RESERVING INVITATION..." : "GET EARLY ACCESS"}</span>
                </button>
              </form>

              {/* Indian WhatsApp Option */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "1rem",
                  padding: "1.25rem",
                  backgroundColor: "var(--color-soft-beige)",
                  border: "1px solid rgba(48, 36, 33, 0.1)",
                  marginBottom: "1.75rem",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--color-espresso)" }}>
                    Prefer WhatsApp updates?
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--color-espresso-75)", fontWeight: 300 }}>
                    Receive a private WhatsApp reminder before the 01.12.26 launch.
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ padding: "0.65rem 1.15rem", fontSize: "0.72rem" }}
                  id="whatsapp-early-access"
                >
                  <MessageCircle size={15} strokeWidth={1.5} />
                  <span>JOIN VIP WHATSAPP</span>
                </a>
              </div>

              {/* Privacy Consent Messaging */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  color: "var(--color-muted-taupe)",
                  fontSize: "0.75rem",
                  textAlign: "center",
                }}
              >
                <ShieldCheck size={16} strokeWidth={1.5} color="var(--color-espresso)" />
                <span>
                  We respect your privacy. No spam, ever. Unsubscribe at any time.
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .form-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .form-grid > :nth-child(3) {
            grid-column: span 2;
          }
        }
      `}</style>
    </section>
  );
};
