"use client";

import { motion } from "framer-motion";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden text-white flex items-center justify-center text-center">

      {/* 👇 Video im Hintergrund */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="Videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* 👇 Overlay (optional für bessere Lesbarkeit) */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* 👇 Content */}
      <motion.div
        className="z-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 mt-20">
          Hallo, Ich bin <span className="text-[#FFD700]">Alon</span>
        </h1>
        <p className="text-xl text-white mb-10">
          Informatik Student und Software Developer
        </p>


        <Link href="#projects">
        <motion.button
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="px-8 py-3 border-2 border-[#FFD700] text-[#FFD700] font-bold rounded-md cursor-pointer transition-colors duration-300"
        >
          MEINE PROJEKTE ANSEHEN
        </motion.button>
      </Link>




      </motion.div>
    </section>
  );
}
