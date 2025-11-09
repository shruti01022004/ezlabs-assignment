import React, { useState } from "react";
import { motion } from "framer-motion";

const videos = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  "https://www.youtube.com/embed/tgbNymZ7vqY",
];

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevVideo = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full min-h-screen bg-[#f7e6dd] text-black flex flex-col items-center p-4 relative overflow-hidden">
      {/* Animated Bubbles */}
      <motion.div
        className="absolute w-8 h-8 bg-orange-300 rounded-full opacity-50"
        animate={{ y: [0, -200, 0], x: [0, 50, 0], rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        style={{ top: "20%", left: "10%" }}
      />
      <motion.div
        className="absolute w-12 h-12 bg-yellow-300 rounded-full opacity-40"
        animate={{ y: [0, -250, 0], x: [0, -40, 0], rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        style={{ top: "60%", left: "80%" }}
      />
      <motion.div
        className="absolute w-6 h-6 bg-orange-400 rounded-full opacity-30"
        animate={{ y: [0, -150, 0], x: [0, 30, 0], rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        style={{ top: "40%", left: "50%" }}
      />

      {/* Logo */}
      <motion.div
        className="w-full flex justify-start p-4 text-xl font-bold z-10 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-orange-500 pr-1">V</span>Films
      </motion.div>

      {/* Animated Title */}
      <motion.div
        className="text-center mt-4 relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400 border border-black px-6 py-2 inline-block rounded-lg shadow-lg">
          The Highlight Reel
        </h1>
        <motion.p
          className="mt-2 underline font-semibold text-lg md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Watch the magic we've captured
        </motion.p>
      </motion.div>

      {/* Video Frame Container */}
      <motion.div
        className="mt-10 bg-white/40 p-4 rounded-xl shadow-xl border border-gray-300 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="relative flex items-center gap-4">
          {/* Left Arrow */}
          <div
            className="cursor-pointer text-4xl px-4 select-none hover:text-orange-500 transition-colors"
            onClick={prevVideo}
          >
            ❮
          </div>

          {/* Video Frame */}
          <div className="border-4 border-black rounded-xl overflow-hidden w-[680px] h-[380px] flex items-center justify-center bg-black">
            <iframe
              className="w-full h-full"
              src={videos[currentIndex]}
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Right Arrow */}
          <div
            className="cursor-pointer text-4xl px-4 select-none hover:text-orange-500 transition-colors"
            onClick={nextVideo}
          >
            ❯
          </div>
        </div>
      </motion.div>

      {/* Decorative icons */}
      <motion.div
        className="absolute left-4 bottom-10 text-orange-500 text-7xl opacity-30"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        📷
      </motion.div>
      <motion.div
        className="absolute right-4 bottom-10 text-orange-500 text-7xl opacity-30"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
      >
        🎞
      </motion.div>
    </div>
  );
}
