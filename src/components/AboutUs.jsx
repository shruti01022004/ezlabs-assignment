import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      style={{
        width: "100%",
        backgroundColor: "#f7eee9",
        color: "#333",
        padding: "60px 20px",
        fontFamily: "'Segoe UI', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Flower Angoli */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          width: "100px",
          height: "100px",
          background:
            "radial-gradient(circle, #fcd34d, #f97316, #f87171)",
          borderRadius: "50%",
          opacity: 0.3,
          transform: "rotate(15deg)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          right: "30px",
          width: "150px",
          height: "150px",
          background:
            "radial-gradient(circle, #34d399, #3b82f6, #8b5cf6)",
          borderRadius: "50%",
          opacity: 0.2,
          transform: "rotate(-20deg)",
        }}
      ></div>

      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
          About Us
        </h2>
        <p style={{ fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
          Varnan is where stories find their voice and form. We craft films,
          branding, and art that resonate, inspire, and leave a lasting impression.
        </p>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              title: "Film Production",
              desc: "Telling stories that live through visuals and emotion.",
              color: "#007B58",
            },
            {
              title: "Branding",
              desc: "Creating memorable identities and impactful communications.",
              color: "#E3AC00",
            },
            {
              title: "Art Creation",
              desc: "Crafting artistic experiences that captivate audiences.",
              color: "#F5CE00",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              style={{
                flex: "0 0 260px",
                backgroundColor: "#fff",
                borderRadius: "15px",
                padding: "20px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                textAlign: "center",
                cursor: "default",
                borderTop: `6px solid ${card.color}`,
                position: "relative",
                transition: "transform 0.3s ease",
              }}
            >
              {/* Optional small decorative icon */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: card.color,
                  opacity: 0.2,
                }}
              ></div>

              <h3 style={{ fontWeight: 600, marginBottom: "10px" }}>{card.title}</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
