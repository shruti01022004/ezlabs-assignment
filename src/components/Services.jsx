import React, { useState } from "react";
import FilmProductionSection from "./FilmProductionSection.jsx";
import BrandingSection from "./BrandingSection.jsx";
import ArtCreationSection from "./ArtCreationSection.jsx";

const servicesData = [
  { id: 1, name: "Anna Anderson", role: "Film Production", imgSrc: "https://randomuser.me/api/portraits/women/44.jpg", borderColor: "#007B58" },
  { id: 2, name: "Hazel Smith", role: "Branding", imgSrc: "https://randomuser.me/api/portraits/women/68.jpg", borderColor: "#E3AC00" },
  { id: 3, name: "Kat Bergman", role: "Art Creation", imgSrc: "https://randomuser.me/api/portraits/women/30.jpg", borderColor: "#F5CE00" },
];

const Services = () => {
  const [openModal, setOpenModal] = useState(null);

  const renderModalContent = () => {
    if (openModal === "film") return <FilmProductionSection />;
    if (openModal === "branding") return <BrandingSection />;
    if (openModal === "art") return <ArtCreationSection />;
    return null;
  };

  return (
    <section style={styles.section}>

        
      {/* Decorative Film Icons */}
      {[
        { src: "https://cdn-icons-png.flaticon.com/512/2840/2840673.png", top: 50, left: 30, width: 70, rotate: -15 },
        { src: "https://cdn-icons-png.flaticon.com/512/1206/1206225.png", top: 200, right: 50, width: 60, rotate: 10 },
        { src: "https://cdn-icons-png.flaticon.com/512/2775/2775686.png", bottom: 80, left: 50, width: 60, rotate: -5 },
        { src: "https://cdn-icons-png.flaticon.com/512/1206/1206225.png", top: 350, left: 150, width: 50, rotate: 25 },
        { src: "https://cdn-icons-png.flaticon.com/512/2840/2840673.png", bottom: 200, right: 120, width: 80, rotate: -30 },
      ].map((icon, idx) => (
        <img
          key={idx}
          src={icon.src}
          alt="Decorative Icon"
          style={{
            position: "absolute",
            top: icon.top,
            left: icon.left,
            right: icon.right,
            bottom: icon.bottom,
            width: icon.width,
            opacity: 0.08,
            zIndex: 0,
            transform: `rotate(${icon.rotate}deg)`,
          }}
        />
      ))}

      <div style={styles.container}>
        <h2 style={styles.heading}>
          The storyboard reveals the breadth of our craft.
          <div style={styles.underline}></div>
        </h2>

        <div style={styles.cardsContainer}>
          {servicesData.map(({ id, name, role, imgSrc, borderColor }) => (
            <div
              key={id}
              style={{
                ...styles.card,
                borderColor,
                boxShadow: "0 12px 30px rgba(0,0,0,0.2), 0 0 15px rgba(255,215,0,0.3)", // highlight effect
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onClick={() =>
                role === "Film Production"
                  ? setOpenModal("film")
                  : role === "Branding"
                  ? setOpenModal("branding")
                  : setOpenModal("art")
              }
            >
              {/* Highlight glow behind image */}
              <div style={styles.imageGlow}></div>

              <div style={styles.imageCard}>
                <img src={imgSrc} alt={name} style={styles.image} />
              </div>
              <div style={styles.caption}>
                <span style={styles.name}>{name}</span>
                <span style={styles.role}>{role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openModal && (
        <div style={styles.modal} onClick={() => setOpenModal(null)}>
          <span style={styles.closeBtn} onClick={() => setOpenModal(null)}>
            &times;
          </span>
          <div onClick={(e) => e.stopPropagation()}>{renderModalContent()}</div>
        </div>
      )}
    </section>
  );
};

const styles = {
  section: {
    position: "relative",
    minHeight: "100vh",
    padding: "3rem 1rem",
    fontFamily: "'Segoe UI', sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    background: "linear-gradient(135deg, #fff8f4 0%, #f1e7e1 100%)",
  },
  container: { maxWidth: 900, width: "100%", textAlign: "center", position: "relative", zIndex: 1 },
  heading: { fontSize: "1.5rem", fontWeight: "600", marginBottom: "2rem", position: "relative", color: "#303133" },
  underline: { width: "160px", height: "4px", backgroundColor: "#25316D", margin: "0.5rem auto 0 auto", borderRadius: "4px", opacity: 0.6 },
  cardsContainer: { display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" },
  card: {
    width: 220,
    padding: "10px",
    border: "4px solid",
    borderRadius: 8,
    backgroundColor: "#FFF",
    position: "relative",
    cursor: "pointer",
    userSelect: "none",
  },
  imageGlow: {
    position: "absolute",
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
    borderRadius: 8,
    background: "radial-gradient(circle, rgba(255,215,0,0.2), transparent 70%)",
    zIndex: 0,
  },
  imageCard: { borderRadius: 8, overflow: "hidden", border: "2px solid #ccc", boxShadow: "0 5px 15px rgba(0,0,0,0.1)", marginBottom: "1rem", position: "relative", zIndex: 1 },
  image: { width: "100%", display: "block" },
  caption: { fontWeight: "500", fontSize: "1rem", color: "#555", textAlign: "center", position: "relative", zIndex: 1 },
  name: { display: "block", marginBottom: "0.2rem", fontWeight: "700", color: "#222" },
  role: { fontSize: "0.85rem", color: "#DDBF28" },
  modal: { position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.85)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999, overflowY: "auto", padding: 20 },
  closeBtn: { position: "absolute", top: "20px", right: "30px", fontSize: "2rem", color: "#fff", cursor: "pointer" },
};

export default Services;
