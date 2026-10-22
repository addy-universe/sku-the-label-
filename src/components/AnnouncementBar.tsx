import React from "react";
import { brandConfig } from "../config/brandConfig";

export const AnnouncementBar: React.FC = () => {
  return (
    <aside 
      aria-label="Brand Announcement"
      style={{
        backgroundColor: "#08080A",
        color: "#FFFFFF",
        padding: "0.65rem 1rem",
        fontSize: "0.72rem",
        fontWeight: 700,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        textAlign: "center",
        borderBottom: "1px solid rgba(255, 77, 128, 0.35)",
        position: "relative",
        zIndex: 50,
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.8rem" }}>
        <span 
          style={{
            display: "inline-block",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "#FF2E74",
            boxShadow: "0 0 10px #FF2E74",
          }}
        />
        <span style={{ color: "#FFF0F5" }}>{brandConfig.announcementText}</span>
        <span 
          style={{
            display: "inline-block",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "#FF2E74",
            boxShadow: "0 0 10px #FF2E74",
          }}
        />
      </div>
    </aside>
  );
};
