import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";
import { brandConfig } from "../config/brandConfig";
import { InstagramIcon } from "./InstagramIcon";

interface HeaderProps {
  onOpenContact?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "LAUNCH DATE", href: "#hero" },
    { label: "SECTOR 18 GGN", href: "#launch-details" },
    { label: "INSTAGRAM", href: brandConfig.social.instagramUrl, external: true },
  ];

  return (
    <header
      id="main-header"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? "rgba(10, 10, 12, 0.94)" : "rgba(10, 10, 12, 0.82)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        transition: "all 0.3s ease",
        borderBottom: isScrolled ? "1px solid rgba(255, 77, 128, 0.35)" : "1px solid rgba(255, 77, 128, 0.18)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: isScrolled ? "0.85rem" : "1.15rem",
          paddingBottom: isScrolled ? "0.85rem" : "1.15rem",
          transition: "padding 0.3s ease",
        }}
      >
        {/* Brand Logo & Name */}
        <a 
          href="#" 
          style={{ 
            display: "flex", 
            alignItems: "center",
            gap: "0.85rem",
            textDecoration: "none",
          }}
          aria-label="SKU THE LABEL Home"
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              padding: "2px",
              background: "linear-gradient(135deg, #FF2E74 0%, #FF85A2 100%)",
              boxShadow: "0 0 14px rgba(255, 46, 116, 0.45)",
              flexShrink: 0,
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
                transform: "rotate(-15deg) scale(1.05)",
                transformOrigin: "center center",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.25rem, 2.2vw, 1.65rem)",
                fontWeight: 600,
                letterSpacing: "0.18em",
                color: "#FFFFFF",
                lineHeight: 1,
              }}
            >
              SKU THE LABEL
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.55rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                color: "var(--color-hot-pink)",
                textTransform: "uppercase",
                marginTop: "3px",
              }}
            >
              OFFICIAL LAUNCH · 01.12.26
            </span>
          </div>
        </a>

        {/* Desktop Minimal Navigation Links */}
        <nav 
          aria-label="Main Navigation"
          style={{
            display: "none",
            alignItems: "center",
            gap: "2.5rem",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              style={{
                fontSize: "0.76rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                color: "rgba(255, 255, 255, 0.85)",
                textTransform: "uppercase",
                textDecoration: "none",
                position: "relative",
                padding: "0.25rem 0",
                transition: "color 0.2s ease",
              }}
              className="nav-link-hover"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Header Actions: Concierge + Instagram + Early Access CTA */}
        <div
          style={{
            display: "none",
            alignItems: "center",
            gap: "1.25rem",
          }}
          className="desktop-actions"
        >
          {onOpenContact && (
            <button
              type="button"
              onClick={onOpenContact}
              style={{
                background: "none",
                border: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
                color: "var(--color-espresso)",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                cursor: "pointer",
                padding: "0.5rem",
              }}
              aria-label="Open Client Concierge"
            >
              <MessageSquare size={15} strokeWidth={1.5} />
              <span>CONCIERGE</span>
            </button>
          )}

          <a
            href={brandConfig.social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SKU THE LABEL on Instagram"
            title="Follow on Instagram"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              color: "var(--color-espresso)",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              fontWeight: 500,
              padding: "0.5rem",
            }}
            className="header-icon-link"
          >
            <InstagramIcon size={17} strokeWidth={1.5} />
            <span style={{ fontSize: "0.72rem", letterSpacing: "0.1em", fontWeight: 600 }}>@sku.thelabel</span>
          </a>

          <a
            href="#early-access"
            className="btn-primary"
            style={{
              padding: "0.65rem 1.35rem",
              fontSize: "0.72rem",
              letterSpacing: "0.14em",
            }}
          >
            JOIN WAITLIST
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "none",
            border: "none",
            color: "var(--color-espresso)",
            padding: "0.5rem",
            cursor: "pointer",
          }}
          className="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "var(--color-warm-ivory)",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            padding: "2rem 1.5rem",
            animation: "drawerSlide 0.3s ease-out",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem" }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.5rem",
                letterSpacing: "0.16em",
                fontWeight: 600,
                color: "var(--color-espresso)",
              }}
            >
              SKU THE LABEL
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              style={{ background: "none", border: "none", color: "var(--color-espresso)", cursor: "pointer", padding: "0.5rem" }}
            >
              <X size={28} strokeWidth={1.5} />
            </button>
          </div>

          <nav style={{ display: "flex", flexDirection: "column", gap: "1.75rem", flex: 1 }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.85rem",
                  color: "var(--color-espresso)",
                  letterSpacing: "0.04em",
                  borderBottom: "1px solid rgba(48, 36, 33, 0.08)",
                  paddingBottom: "0.75rem",
                }}
              >
                {link.label}
              </a>
            ))}

            {onOpenContact && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                style={{
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.85rem",
                  color: "var(--color-espresso)",
                  letterSpacing: "0.04em",
                  borderBottom: "1px solid rgba(48, 36, 33, 0.08)",
                  paddingBottom: "0.75rem",
                  cursor: "pointer",
                }}
              >
                CLIENT CONCIERGE
              </button>
            )}
          </nav>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", paddingTop: "2rem", borderTop: "1px solid rgba(48, 36, 33, 0.1)" }}>
            <a
              href={brandConfig.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                color: "var(--color-espresso)",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
              }}
            >
              <InstagramIcon size={18} strokeWidth={1.5} />
              <span>FOLLOW ON INSTAGRAM</span>
              <ArrowUpRight size={16} />
            </a>

            <a
              href="#early-access"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{ width: "100%", marginTop: "0.5rem", textAlign: "center" }}
            >
              GET EARLY ACCESS
            </a>
          </div>
        </div>
      )}

      {/* Responsive media query injected styles */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
        }
        .nav-link-hover::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: var(--color-espresso);
          transition: width 0.3s ease;
        }
        .nav-link-hover:hover::after {
          width: 100%;
        }
        @keyframes drawerSlide {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
};
