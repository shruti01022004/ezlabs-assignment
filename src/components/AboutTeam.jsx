import React from "react";
import { motion } from "framer-motion";

export default function AboutTeam() {
  // Bubble animation variants
  const bubbleVariants = {
    float: {
      y: [0, -20, 0], 
      x: [0, 10, -10, 0],
      rotate: [0, 15, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  // Interactive bubble style
  const bubbleStyle = (color, size) => ({
    width: size,
    height: size,
    borderRadius: "50%",
    backgroundColor: color,
    zIndex: 0,
    position: "absolute",
  });

  return (
    <div className="min-h-screen w-full bg-[#f7efe9] text-gray-800 p-6 flex flex-col items-center relative overflow-hidden">
      
      {/* Floating Interactive Bubbles */}
      <motion.div
        style={bubbleStyle("#F5C51850", "40px")}
        variants={bubbleVariants}
        animate="float"
        whileHover={{ scale: 1.3, backgroundColor: "#F5C51880" }}
      />
      <motion.div
        style={bubbleStyle("#E44C6540", "50px")}
        className="top-20 right-20"
        variants={bubbleVariants}
        animate="float"
        whileHover={{ scale: 1.3, backgroundColor: "#E44C6580" }}
      />
      <motion.div
        style={bubbleStyle("#4C92E430", "60px")}
        className="bottom-24 left-32"
        variants={bubbleVariants}
        animate="float"
        whileHover={{ scale: 1.3, backgroundColor: "#4C92E460" }}
      />
      <motion.div
        style={bubbleStyle("#2ACF9140", "35px")}
        className="bottom-10 right-16"
        variants={bubbleVariants}
        animate="float"
        whileHover={{ scale: 1.3, backgroundColor: "#2ACF9180" }}
      />

      {/* Top Bar */}
      <header className="w-full flex justify-between items-center py-4 px-2 max-w-6xl relative z-10">
        <h1 className="text-xl font-semibold text-[#e44]">V Films</h1>
        <div className="w-6 h-5 flex flex-col justify-between cursor-pointer">
          <span className="block h-[3px] w-full bg-black"></span>
          <span className="block h-[3px] w-full bg-black"></span>
          <span className="block h-[3px] w-full bg-black"></span>
        </div>
      </header>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mt-10 max-w-6xl w-full relative z-10">
        {/* Left Tilted Card */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -6 }}
          animate={{ opacity: 1, x: 0, rotate: -6 }}
          transition={{ duration: 1 }}
          className="bg-[#fffbea] shadow-xl p-6 rounded-md max-w-sm text-sm leading-relaxed transform -rotate-6"
        >
          <p>
            Some craft films. Some build brands. Some curate art. We bring it all
            together – a collective of storytellers driven by one belief: every
            project deserves to be more than just a message; it should become a
            masterpiece.
          </p>
          <p className="mt-4">
            From first spark to final frame, from raw ideas to timeless visuals – we
            shape stories that stay with you.
          </p>
        </motion.div>

        {/* Right Silhouettes Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col items-center text-center gap-4"
        >
          <div className="relative border-2 border-[#2a4c92] p-4 rounded-md bg-white/60 shadow-lg">
            <img
              src="/images/teamwork_silhouettes.png"
              alt="Team silhouettes"
              className="w-64"
            />
          </div>

          <div className="flex justify-between w-full px-4 text-sm italic text-gray-700">
            <span>Film Makers</span>
            <span>Art Curators</span>
          </div>
        </motion.div>
      </div>

      {/* Lower Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="mt-12 text-center max-w-3xl relative z-10"
      >
        <p className="italic text-sm">Branding Experts</p>

        <p className="mt-6 text-lg font-medium">
          Take a closer look at the stories V bring to life.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 rounded-full px-6 py-2 bg-[#d86c4c] text-white shadow-md hover:bg-[#e07b5a] transition-colors"
        >
          View Portfolio
        </motion.button>
      </motion.div>
    </div>
  );
}
