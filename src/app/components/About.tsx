"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0d0f13] text-white py-28 px-6 flex flex-col md:flex-row items-center justify-center gap-16"
    >
      {/* Oval profile picture area */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 border-4 border-yellow-400 shadow-xl"
      >
        <Image
          src="/images/Alon.png"
          alt="Alon Iliagouev"
          width={320}
          height={320}
          className="object-cover w-full h-full scale-125 object-top"
        />
      </motion.div>

      {/* Text section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-xl"
      >
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-yellow-400 inline-block">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          From an early age, I realized my fascination with technology and problem-solving.
          My journey into the world of software development began with the programming language{" "}
          <strong className="text-yellow-400">C</strong> — and from there, there was no turning back.
          <br /><br />
          Today, my focus is on{" "}
          <strong className="text-yellow-400">C#</strong>, modern{" "}
          <strong className="text-yellow-400">web development</strong>, and{" "}
          <strong className="text-yellow-400">artificial intelligence</strong>.
          I’m passionate about building applications that don’t just work, but are well-thought-out,
          structured, and future-proof.
          <br /><br />
          Whether it’s a desktop app, web app, or intelligent system — I love understanding complex problems
          and creating elegant solutions.
          <br /><br />
          Alongside studying computer science in Vienna, I regularly work on projects that help me deepen my knowledge
          and experiment with new technologies.
        </p>
      </motion.div>
    </section>
  );
}
