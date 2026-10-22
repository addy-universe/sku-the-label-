import React, { useState } from "react";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { LaunchDetailsSection } from "./components/LaunchDetailsSection";
import { Footer } from "./components/Footer";
import { LegalModal } from "./components/LegalModal";
import { ContactModal } from "./components/ContactModal";

export const App: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="sku-app-wrapper" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
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
  );
};

export default App;
