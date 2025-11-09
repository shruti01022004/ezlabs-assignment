import React from "react";

const BrandingSection = () => {
  return (
    <section
      style={{
        backgroundColor: "#fdf3ef",
        minHeight: "100vh",
        padding: "60px 40px",
        fontFamily: "'Segoe UI', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* CSS for floating animations */}
      <style>
        {`
          @keyframes floatUpDown {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }

          @keyframes floatRotate {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(15deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }

          .float-slow { animation: floatUpDown 6s ease-in-out infinite; }
          .float-medium { animation: floatUpDown 4s ease-in-out infinite; }
          .float-fast { animation: floatUpDown 3s ease-in-out infinite; }
          .float-rotate { animation: floatRotate 5s ease-in-out infinite; }
        `}
      </style>

      {/* TOP QUOTE */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "1.4rem",
          fontWeight: "600",
          color: "#333",
        }}
      >
        “A brand is a voice, and a product is a souvenir.” – Lisa Gansky
      </h2>

      {/* BLUE PAINT BRUSH LINE */}
      <div
        style={{
          width: "60%",
          height: "14px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557682250-66e7b7fa26c3?fit=crop&w=300&q=80')",
          backgroundSize: "cover",
          margin: "10px auto 40px",
        }}
      ></div>

      {/* MAIN CONTENT FLEX */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "60px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT IMAGE CARD */}
        <div
          style={{
            background: "#fff",
            padding: "10px",
            borderRadius: "12px",
            boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
            width: "280px",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <img
            src="https://cbx-prod.b-cdn.net/COLOURBOX17786097.jpg?width=800&height=800&quality=70"
            alt="Branding concept on laptop screen"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/280x240.png?text=Image+Not+Found";
            }}
            style={{
              width: "100%",
              height: "240px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />

          <p
            style={{
              fontWeight: "700",
              marginTop: "10px",
              fontSize: "1.1rem",
              color: "#194fbb",
            }}
          >
            Branding
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div style={{ maxWidth: "480px", position: "relative", zIndex: 1 }}>
          <p style={{ fontSize: "1rem", color: "#444", lineHeight: 1.7 }}>
            A brand isn’t just what you see – it’s what you remember, what you
            carry home, and what you trust. We shape brands that people remember,
            return to, and fall in love with.
          </p>

          <div
            style={{
              fontWeight: "700",
              marginTop: "12px",
              color: "#194fbb",
              fontSize: "1.1rem",
            }}
          >
            V creates:
          </div>

          <ul
            style={{
              color: "#1a2b63",
              paddingLeft: "18px",
              lineHeight: 1.8,
              marginTop: "6px",
            }}
          >
            <li>Branding & Communication</li>
            <li>Market Mapping</li>
            <li>Content Management</li>
            <li>Social Media Management</li>
            <li>Rebranding</li>
          </ul>

          <div
            style={{
              marginTop: "30px",
              fontWeight: "600",
              color: "#d53737",
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Explore Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#d53737"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              style={{ marginLeft: "8px" }}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>

      {/* PREMIUM FLOATING BUBBLE CLUSTERS */}
      {[
        { top: "50px", left: "30px", size: 40, colors: ["#ff9a9e", "#fad0c4"], speed: "float-slow" },
        { top: "120px", left: "200px", size: 50, colors: ["#a1c4fd", "#c2e9fb"], speed: "float-medium" },
        { top: "220px", right: "50px", size: 30, colors: ["#fbc2eb", "#a6c1ee"], speed: "float-fast" },
        { bottom: "100px", left: "60px", size: 60, colors: ["#ffecd2", "#fcb69f"], speed: "float-medium" },
        { bottom: "180px", right: "100px", size: 80, colors: ["#a1c4fd", "#c2e9fb"], speed: "float-slow" },
        { top: "300px", left: "150px", size: 35, colors: ["#f6d365", "#fda085"], speed: "float-rotate" },
        { top: "400px", right: "180px", size: 50, colors: ["#fccb90", "#d57eeb"], speed: "float-rotate" },
      ].map((bubble, idx) => (
        <div
          key={idx}
          className={bubble.speed}
          style={{
            position: "absolute",
            top: bubble.top,
            left: bubble.left,
            right: bubble.right,
            width: bubble.size,
            height: bubble.size,
            background: `radial-gradient(circle, ${bubble.colors[0]}, ${bubble.colors[1]})`,
            borderRadius: "50%",
            opacity: 0.2 + Math.random() * 0.1, // slight variation
            zIndex: 0,
          }}
        ></div>
      ))}
    </section>
  );
};

export default BrandingSection;
