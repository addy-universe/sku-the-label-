import React, { useState, useEffect } from "react";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { LaunchDetailsSection } from "./components/LaunchDetailsSection";
import { Footer } from "./components/Footer";
import { LegalModal } from "./components/LegalModal";
import { ContactModal } from "./components/ContactModal";
import { CinematicIntro } from "./components/CinematicIntro";

export const App: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Cinematic Launch Intro State (Plays once per browser session, respects prefers-reduced-motion)
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return false;
    }
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("intro") === "true") return true;

    try {
      return !sessionStorage.getItem("sku_intro_played");
    } catch {
      return true;
    }
  });

  const [hasJustActivated, setHasJustActivated] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setHasJustActivated(true);
    try {
      sessionStorage.setItem("sku_intro_played", "true");
    } catch {
      // Ignore storage restrictions
    }
    setTimeout(() => setHasJustActivated(false), 2000);
  };

  const handleReplayIntro = () => {
    try {
      sessionStorage.removeItem("sku_intro_played");
    } catch {
      // Ignore
    }
    setShowIntro(true);
  };

  // Global helper on window object for testing: window.replayIntro()
  useEffect(() => {
    (window as unknown as { replayIntro: () => void }).replayIntro = handleReplayIntro;
  }, []);

  return (
    <>
      {/* 0. Cinematic Launch Animated Intro (Overlay) */}
      {showIntro && <CinematicIntro onComplete={handleIntroComplete} />}

      <div
        className={`sku-app-wrapper ${hasJustActivated ? "homepage-just-activated" : ""}`}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1), filter 1s ease",
          transform: hasJustActivated ? "scale(1)" : "none",
        }}
      >
        {/* 1. Announcement Bar */}
        <AnnouncementBar />

        {/* 2. Header */}
        <Header onOpenContact={() => setContactModalOpen(true)} />

        {/* 3. Main Coming Soon Showcase (Zero model photos) */}
        <main id="main-content" style={{ flex: 1 }}>
          {/* Hero Section with Launch Date, Store in Gurugram, Instagram @sku.thelabel, and Live Countdown */}
          <HeroSection />

          {/* Dedicated Information Cards: Official Launch Date, Store in Gurugram, and @sku.thelabel */}
          <LaunchDetailsSection onOpenContact={() => setContactModalOpen(true)} />
        </main>

        {/* 4. Footer */}
        <Footer
          onOpenPrivacy={() => setLegalModalType("privacy")}
          onOpenTerms={() => setLegalModalType("terms")}
          onOpenContact={() => setContactModalOpen(true)}
          onReplayIntro={handleReplayIntro}
        />

        {/* 5. Modals & Dialogs */}
        <LegalModal
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />

        <ContactModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
        />
      </div>
    </>
  );
};

export default App;
