// ArtCreationSection.jsx
import React from "react";

const ArtCreationSection = () => {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#f0f4ff",
        padding: "50px 70px",
        fontFamily: "'Poppins', sans-serif",
        color: "#22335d",
        overflow: "hidden",
      }}
    >
      <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}>
        Art Creation
      </h2>
      <p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
        Art isn’t just decoration – it’s a way to communicate emotion, tell stories, and make spaces and ideas unforgettable. 
        Our team curates visual experiences that resonate, inspire, and captivate.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: "250px", textAlign: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?w=600"
            alt="Art 1"
            style={{ width: "100%", borderRadius: "10px", objectFit: "cover", height: "180px" }}
          />
          <p style={{ marginTop: "10px", fontWeight: 600 }}>Illustrations</p>
        </div>
        <div style={{ width: "250px", textAlign: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600"
            alt="Art 2"
            style={{ width: "100%", borderRadius: "10px", objectFit: "cover", height: "180px" }}
          />
          <p style={{ marginTop: "10px", fontWeight: 600 }}>Digital Art</p>
        </div>
        <div style={{ width: "250px", textAlign: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1509223197845-458d87318791?w=600"
            alt="Art 3"
            style={{ width: "100%", borderRadius: "10px", objectFit: "cover", height: "180px" }}
          />
          <p style={{ marginTop: "10px", fontWeight: 600 }}>3D Modeling</p>
        </div>
      </div>
    </section>
  );
};

export default ArtCreationSection;
