import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import mandalaImage from "../assets/mandala.png";
import creativeImage from "../assets/creative.png";

export default function LandingPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Track scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track mouse for floating bubbles
  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate floating bubbles
  const bubbles = [...Array(12)].map((_, i) => {
    const size = 20 + Math.random() * 50;
    const speed = 4 + Math.random() * 3;
    const xOffset = Math.random() * 100;
    const yOffset = Math.random() * 100;
    return (
      <motion.div
        key={i}
        className="absolute rounded-full bg-purple-300 opacity-30 pointer-events-none"
        style={{ width: size, height: size, top: `${yOffset}%`, left: `${xOffset}%` }}
        animate={{
          y: [0, -20 + Math.random() * 40, 0],
          x: [0, -20 + Math.random() * 40, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{ duration: speed, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
    );
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#f7e6dd] to-[#f1d9c9] text-black flex flex-col md:flex-row items-center justify-center p-10 relative overflow-hidden">

      {/* Left Mandala + Logo */}
      <motion.div
        style={{ y: scrollY * 0.1 }}
        initial={{ x: -150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col items-center mr-0 md:mr-20 mb-10 md:mb-0 relative"
      >
        <div className="relative w-80 h-80 flex items-center justify-center rounded-full shadow-xl overflow-hidden">
          <motion.img
            src={mandalaImage}
            alt="Mandala"
            className="absolute inset-0 w-full h-full object-contain opacity-60"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          />
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="relative z-10 border-2 border-[#4a4a7a] px-6 py-2 bg-white text-4xl font-semibold flex items-center shadow-lg cursor-pointer"
          >
            <span className="text-orange-600 mr-1 text-5xl animate-bounce">V</span>Films
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        style={{ y: scrollY * 0.05 }}
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="max-w-xl text-center md:text-left relative"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-5xl leading-snug inline-block font-[cursive] mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent tracking-tight drop-shadow-lg animate-pulse-slow"
        >
          Varnan is where stories find<br />their voice and form
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg font-semibold mb-6 tracking-wider text-[#f97316] drop-shadow-md animate-bounce"
        >
          Films . Brands . Art
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-sm leading-relaxed text-[#3d3d3d] tracking-wide border-l-4 border-purple-400 pl-4 italic shadow-md p-2 rounded-md bg-white/30 backdrop-blur-sm"
        >
          Since 2008, V has been telling stories — stories of people, their journeys, and the places that shape them. Some begin in polished boardrooms, others in humble village squares. Every story starts the same way: by listening with intention. At V, it takes trust, patience, and an eye for the unseen to capture what truly matters. V doesn’t just tell stories. V honors them.
        </motion.p>

        <motion.div
          className="relative mt-6 w-full rounded-xl shadow-2xl overflow-hidden cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        >
          <img
            src={creativeImage}
            alt="Creative"
            className="w-full h-auto rounded-xl shadow-2xl border-4 border-white/30"
          />
          <motion.div
            className="absolute top-5 left-10 w-12 h-12 bg-purple-400 rounded-full opacity-50 blur-xl"
            animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 right-20 w-16 h-16 bg-pink-400 rounded-full opacity-40 blur-xl"
            animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/20 rounded-xl pointer-events-none"></div>
          <div className="absolute inset-0 shadow-[0_0_60px_rgba(255,182,193,0.3)] rounded-xl pointer-events-none"></div>
        </motion.div>
      </motion.div>

      {/* Floating Bubbles */}
      {bubbles.map((bubble, index) => (
        <motion.div
          key={index}
          style={{
            left: mousePos.x + (Math.random() - 0.5) * 200,
            top: mousePos.y + (Math.random() - 0.5) * 200,
          }}
          className="absolute rounded-full bg-pink-300 opacity-30 pointer-events-none"
          animate={{
            scale: [0.5, 1.2, 0.5],
            rotate: [0, 360, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, repeatType: "mirror" }}
        />
      ))}

      {/* Rangoli Decorative Icons */}
      <motion.div
        className="absolute top-10 left-5 w-16 h-16 bg-gradient-to-tr from-purple-500 via-pink-400 to-orange-300 rounded-full shadow-xl opacity-40 pointer-events-none"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-400 rounded-full shadow-xl opacity-30 pointer-events-none"
        animate={{ rotate: [360, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 right-5 w-12 h-12 bg-gradient-to-l from-yellow-300 via-red-400 to-purple-500 rounded-full shadow-lg opacity-30 pointer-events-none"
        animate={{ rotate: [0, 360, 0] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
      />
    </div>
  );
}
