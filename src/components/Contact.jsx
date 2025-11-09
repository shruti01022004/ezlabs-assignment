import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse position for floating bubbles
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Floating bubbles
  const bubbles = [...Array(12)].map((_, i) => {
    const size = 15 + Math.random() * 40;
    const speed = 4 + Math.random() * 3;
    const xOffset = Math.random() * 100;
    const yOffset = Math.random() * 100;
    return (
      <motion.div
        key={i}
        className="absolute rounded-full bg-purple-300 opacity-20 pointer-events-none blur-xl"
        style={{
          width: size,
          height: size,
          top: `${yOffset}%`,
          left: `${xOffset}%`,
        }}
        animate={{
          y: [0, -20 + Math.random() * 40, 0],
          x: [0, -20 + Math.random() * 40, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    );
  });

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "80px 40px",
        fontFamily: "'Segoe UI', sans-serif",
        backgroundColor: "#fff8f4",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Decorative Rangoli / Mandala Icons */}
      <motion.img
        src="https://media.istockphoto.com/id/1851344435/vector/round-gradient-mandala-with-floral-patterns-ethnic-round-ornament-hand-drawn-indian-motif.jpg?s=612x612&w=0&k=20&c=gNTzBd4PfyWnookU2Rt0hVBh5K73y7eOwNG7vz4ERi8="
        alt="Rangoli Top Left"
        style={{
          position: "absolute",
          top: "-30px",
          left: "-30px",
          width: "180px",
          opacity: 0.15,
          zIndex: 0,
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />
      <motion.img
        src="https://media.istockphoto.com/id/1851344435/vector/round-gradient-mandala-with-floral-patterns-ethnic-round-ornament-hand-drawn-indian-motif.jpg?s=612x612&w=0&k=20&c=gNTzBd4PfyWnookU2Rt0hVBh5K73y7eOwNG7vz4ERi8="
        alt="Rangoli Bottom Right"
        style={{
          position: "absolute",
          bottom: "-20px",
          right: "-20px",
          width: "180px",
          opacity: 0.15,
          zIndex: 0,
        }}
        animate={{ rotate: [0, -360] }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating bubbles */}
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          style={{
            left: mousePos.x + (Math.random() - 0.5) * 200,
            top: mousePos.y + (Math.random() - 0.5) * 200,
          }}
          className="absolute rounded-full bg-pink-300 opacity-20 pointer-events-none blur-xl"
          animate={{
            scale: [0.5, 1.2, 0.5],
            rotate: [0, 360, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, repeatType: "mirror" }}
        />
      ))}

      {/* Animated Gradient Heading */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          fontSize: "2.8rem",
          fontWeight: "800",
          background: "linear-gradient(90deg, #ff7a18, #af002d, #319197)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          marginBottom: "15px",
          zIndex: 1,
        }}
      >
        Contact Us
      </motion.h2>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#444",
          marginBottom: "50px",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        Get in touch with us for any inquiries or support.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "60px",
          maxWidth: "1000px",
          width: "100%",
          zIndex: 1,
        }}
      >
        {/* Left Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            flex: "1 1 300px",
            background: "linear-gradient(145deg, #ffffffdd, #fff0e6cc)",
            padding: "35px",
            borderRadius: "25px",
            border: "2px solid transparent",
            backgroundClip: "padding-box, border-box",
            borderImage: "linear-gradient(45deg, #ff7a18, #af002d) 1",
            boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
            color: "#22335d",
            backdropFilter: "blur(6px)",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", color: "#194fbb" }}>Films</h3>
          <p style={{ marginBottom: "8px" }}>
            Whether you have an idea, a question, or simply want to explore how
            we can work together, you’re just a message away.
          </p>
          <p style={{ marginBottom: "8px" }}>Let’s catch up over coffee.</p>
          <p style={{ marginBottom: "8px" }}>Great stories always begin with a good conversation.</p>
          <p
            style={{
              backgroundColor: "#00bfff",
              color: "white",
              display: "inline-block",
              padding: "0.25rem 0.5rem",
              borderRadius: "6px",
              marginTop: "10px",
            }}
          >
            502-1465
          </p>
        </motion.div>

        {/* Right Card - Form */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            flex: "1 1 300px",
            background: "linear-gradient(145deg, #ffffffdd, #fff0e6cc)",
            padding: "35px",
            borderRadius: "25px",
            border: "2px solid transparent",
            backgroundClip: "padding-box, border-box",
            borderImage: "linear-gradient(45deg, #319197, #af002d) 1",
            boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
            color: "#22335d",
            backdropFilter: "blur(6px)",
          }}
        >
          <h3 style={{ fontSize: "1.5rem", marginBottom: "15px", color: "#194fbb" }}>
            Join <em>the</em> Story
          </h3>
          <p style={{ marginBottom: "15px" }}>Ready to bring your vision to life? Let's talk.</p>
          <form style={{ marginTop: "15px" }}>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "12px",
                  border: "1px solid #ccc",
                  outline: "none",
                  transition: "0.3s",
                }}
                className="focus:border-purple-400 focus:shadow-lg"
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "12px",
                  border: "1px solid #ccc",
                  outline: "none",
                  transition: "0.3s",
                }}
                className="focus:border-purple-400 focus:shadow-lg"
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="message" style={{ display: "block", marginBottom: "5px" }}>Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "12px",
                  border: "1px solid #ccc",
                  resize: "none",
                  outline: "none",
                  transition: "0.3s",
                }}
                className="focus:border-purple-400 focus:shadow-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                padding: "12px 30px",
                backgroundColor: "#194fbb",
                color: "#fff",
                fontWeight: "600",
                border: "none",
                borderRadius: "15px",
                cursor: "pointer",
                transition: "0.3s",
              }}
              className="hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
