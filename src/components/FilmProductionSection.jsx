import React from "react";

const FilmProductionSection = () => {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#fff8f4",
        backgroundImage:
          "radial-gradient(#e0d1cc 1px, transparent 1px), radial-gradient(#e0d1cc 1px, #fff8f4 1px)",
        backgroundPosition: "0 0, 10px 10px",
        backgroundSize: "20px 20px",
        color: "#22335d",
        fontFamily: "'Poppins', sans-serif",
        padding: "50px 70px",
        overflow: "hidden",
      }}
    >
      {/* Floating bubble animations */}
      <style>
        {`
          @keyframes floatUpDown {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          .float-slow { animation: floatUpDown 6s ease-in-out infinite; }
          .float-medium { animation: floatUpDown 4s ease-in-out infinite; }
          .float-fast { animation: floatUpDown 3s ease-in-out infinite; }
        `}
      </style>

      {/* Quote */}
      <div style={{ textAlign: "center", marginBottom: "35px" }}>
        <h2
          style={{
            fontWeight: 600,
            fontSize: "22px",
            display: "inline-block",
            position: "relative",
          }}
        >
          “Filmmaking is a chance to live many lifetimes.” – Robert Altman
        </h2>
        <div
          style={{
            backgroundImage:
              "url('https://i.ibb.co/6r2q8cZ/brush.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height: "18px",
            width: "420px",
            margin: "10px auto 0",
          }}
        />
      </div>

      {/* Logo */}
      <motion.div
        className="w-full flex justify-start p-4 text-xl font-bold z-10 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-orange-500 pr-1">V</span>Films
      </motion.div>


      {/* Main Content */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "80px",
          flexWrap: "wrap",
        }}
      >
        {/* Left Image */}
        <div
          style={{
            background: "white",
            borderRadius: "10px",
            boxShadow: "0 8px 18px rgba(0,0,0,0.15)",
            padding: "12px",
            width: "300px",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600"
            alt="Film Production"
            style={{
              width: "100%",
              height: "250px",
              borderRadius: "6px",
              objectFit: "cover",
            }}
          />
          <p
            style={{
              marginTop: "10px",
              fontWeight: 600,
              color: "#22335d",
            }}
          >
            Film Production
          </p>
        </div>

        {/* Right Text */}
        <div
          style={{
            maxWidth: "520px",
            lineHeight: "1.6",
            position: "relative",
            zIndex: 1,
          }}
        >
          <p>
            Who says films are just an escape? <br />
            We see them as a way to live many lives – to feel, to explore, and
            to tell stories that stay.
          </p>
          <p>
            And with each film, we carry new memories and new reasons to keep
            creating.
          </p>

          <p style={{ fontWeight: 600, marginTop: "10px", color: "#194fbb" }}>
            V crafts:
          </p>
          <ul
            style={{
              marginLeft: "18px",
              lineHeight: "1.7",
              listStyleType: "disc",
              color: "#1a3b8f",
            }}
          >
            <li>Documentaries</li>
            <li>Corporate Videos</li>
            <li>2D Animation Videos</li>
            <li>3D Animation Videos</li>
          </ul>

          {/* Explore Button with SVG Arrow */}
          <div
            style={{
              marginTop: "25px",
              fontWeight: 600,
              color: "#c0452f",
              display: "inline-flex",
              alignItems: "center",
              fontSize: "15px",
              cursor: "pointer",
              gap: "8px",
            }}
          >
            Explore Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#c0452f"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating Bubbles */}
      {[
        { top: "50px", left: "20px", size: 40, colors: ["#ff9a9e", "#fad0c4"], speed: "float-slow" },
        { top: "200px", right: "40px", size: 60, colors: ["#a1c4fd", "#c2e9fb"], speed: "float-medium" },
        { top: "350px", left: "120px", size: 35, colors: ["#fbc2eb", "#a6c1ee"], speed: "float-fast" },
        { bottom: "80px", right: "80px", size: 50, colors: ["#ffecd2", "#fcb69f"], speed: "float-medium" },
        { bottom: "150px", left: "60px", size: 70, colors: ["#a1c4fd", "#c2e9fb"], speed: "float-slow" },
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
            opacity: 0.15 + Math.random() * 0.1,
            zIndex: 0,
          }}
        ></div>
      ))}

      {/* Decorative Icons */}
      <img
        src="https://cdn.vectorstock.com/i/1000v/21/03/gold-medal-with-laurel-wreath-vector-182103.jpg"
        alt="Award Icon"
        style={{
          position: "absolute",
          right: "60px",
          top: "150px",
          width: "60px",
          opacity: 0.15,
          transform: "rotate(-10deg)",
          zIndex: 0,
        }}
      />
      <img
        src="https://cdn.vectorstock.com/i/1000v/28/40/gold-laurel-wreath-icon-luxury-emblem-for-winner-vector-29272840.jpg"
        alt="Decor Icon"
        style={{
          position: "absolute",
          left: "50px",
          bottom: "100px",
          width: "50px",
          opacity: 0.15,
          transform: "rotate(5deg)",
          zIndex: 0,
        }}
      />
    </section>
  );
};

export default FilmProductionSection;
