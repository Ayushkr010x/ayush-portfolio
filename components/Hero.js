import React from "react";
import { motion } from "framer-motion";
import Typed from "react-typed";

export default function Hero() {
  return (
    <section id="about" className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-800 dark:bg-gray-800 text-white p-6">
      <motion.div
        className="md:w-1/2 p-4"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">Ayush Kumar</h1>
        <h2 className="text-4xl font-bold text-[#FFD700] mb-4">
          <Typed
            strings={[
              "Full Stack Developer",
              "Coding Enthusiast",
              "MERN Stack Developer",
              "Product Builder"
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h2>
        <p className="mb-4">
          Aspiring full-stack developer, scaling expertise in MERN stack and data structures & algorithms to build efficient, real-world solutions
        </p>
      </motion.div>
      <motion.div
        className="md:w-1/2 p-4 flex justify-center"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img 
          src="/profile.jpg" 
          alt="Ayush Kumar" 
          className="rounded-full w-64 h-64 object-cover border-4 border-yellow-400"
        />
      </motion.div>
    </section>
  );
}
