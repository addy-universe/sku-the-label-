/**
 * Brand Configuration for SKU THE LABEL
 * All launch dates, social links, contact information, and brand copy are centralized here.
 */

export interface CategoryPreview {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface BrandConfig {
  brandName: string;
  subTitle: string;
  tagline: string;
  announcementText: string;
  
  /**
   * Launch timestamp in ISO format with explicit IST (+05:30) offset
   * Target: 1 December 2026, at 12:00 AM IST
   */
  launchDateISO: string;
  launchDateFormatted: string;
  launchTimezone: string;
  
  store: {
    name: "SKU Flagship Store",
    address: "Sector 18, GGN (Gurugram), Haryana, India",
    addressShort: "Sector 18 GGN",
    phone: "9599393269",
    phoneDisplay: "+91 95993 93269",
    phoneTel: "tel:+919599393269",
    owners: "Shruti & Komal",
  };

  social: {
    instagramUrl: string;
    instagramHandle: string;
    whatsappNumber: string; // Indian mobile number in E.164 format
    whatsappDisplay: string;
    whatsappMessage: string;
  };

  contact: {
    supportEmail: string;
    pressEmail: string;
    inquiryPhone: string;
    country: string;
    currency: string;
  };

  categories: CategoryPreview[];
}

export const brandConfig: BrandConfig = {
  brandName: "SKU THE LABEL",
  subTitle: "WOMEN'S EDITORIAL FASHION & ESSENTIALS",
  tagline: "Modern style. Everyday confidence.",
  announcementText: "LAUNCHING 01 DEC 2026 · SECTOR 18 GGN · STORE NO: +91 95993 93269 · BY SHRUTI & KOMAL",
  
  // 1 December 2026, 00:00:00 IST (Indian Standard Time UTC+05:30)
  launchDateISO: "2026-12-01T00:00:00+05:30",
  launchDateFormatted: "01 DECEMBER 2026",
  launchTimezone: "Asia/Kolkata (IST)",

  store: {
    name: "SKU Flagship Store",
    address: "Sector 18, GGN (Gurugram), Haryana, India",
    addressShort: "Sector 18 GGN",
    phone: "9599393269",
    phoneDisplay: "+91 95993 93269",
    phoneTel: "tel:+919599393269",
    owners: "Shruti & Komal",
  },

  social: {
    instagramUrl: "https://instagram.com/sku.thelabel",
    instagramHandle: "sku.thelabel",
    whatsappNumber: "+919599393269",
    whatsappDisplay: "+91 95993 93269",
    whatsappMessage: "Hello SKU THE LABEL Concierge, I would love early access to the upcoming launch.",
  },

  contact: {
    supportEmail: "concierge@skuthelabel.com",
    pressEmail: "press@skuthelabel.com",
    inquiryPhone: "+91 95993 93269",
    country: "India",
    currency: "INR (₹)",
  },

  categories: [
    {
      id: "lingerie",
      name: "Lingerie & Bras",
      tagline: "Second-skin softness & sculpted support",
      description: "Designed for day-long effortless comfort with delicate breathable silks, wire-free tailored contours, and refined neutrals that complement every shade of Indian skin.",
      image: "/images/cat-lingerie-hero.png",
      highlights: ["Ultra-soft modal & silk blends", "Non-constricting wire-free support", "Invisible seam construction"]
    },
    {
      id: "tops",
      name: "Tops & Shirts",
      tagline: "Refined silhouettes for effortless dressing",
      description: "Crisp architectural shirts, fluid silk blouses, and relaxed button-downs made to transition effortlessly from boardroom meetings to evening dinners.",
      image: "/images/cat-tops-hero.png",
      highlights: ["Breathable mulberry silk & poplin", "Relaxed tailored drapes", "Neutral tone palettes"]
    },
    {
      id: "denim",
      name: "Denim & Jeans",
      tagline: "Custom-feel fits crafted for her shape",
      description: "Carefully proportioned high-rise and straight-leg cuts with gentle stretch recovery, celebrating real bodies with timeless vintage washes.",
      image: "/images/cat-denim-hero.png",
      highlights: ["Premium ring-spun cotton denim", "Flattering high-rise waistline", "Lasting shape retention"]
    },
    {
      id: "dresses",
      name: "Dresses",
      tagline: "Fluid, feminine drape & understated elegance",
      description: "Slip midi dresses, bias-cut silhouettes, and relaxed daytime dresses cut from fluid fabrics that celebrate feminine movement without feeling overdone.",
      image: "/images/cat-dresses-hero.png",
      highlights: ["Bias-cut fluid drape", "Versatile day-to-night styling", "Flattering movement"]
    },
    {
      id: "essentials",
      name: "Everyday Essentials",
      tagline: "The foundation of a thoughtful wardrobe",
      description: "The elevated basics you'll reach for every morning — rib-knit camisoles, premium cotton tees, relaxed lounge trousers, and layering pieces.",
      image: "/images/cat-essentials-hero.png",
      highlights: ["Micro-ribbed Peruvian pima cotton", "Colorfast neutral dyes", "Durable everyday comfort"]
    }
  ]
};
