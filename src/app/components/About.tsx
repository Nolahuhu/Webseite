"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0d0f13] text-white py-28 px-6 flex flex-col md:flex-row items-center justify-center gap-16"
    >
      {/* Ovale Profilbildfläche */}
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

      {/* Textabschnitt */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-xl"
      >
        <h2 className="text-4xl font-bold mb-6 border-b-4 border-yellow-400 inline-block">
          Über mich
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Schon früh habe ich gemerkt, dass mich Technik und Problemlösungen faszinieren. 
          Meine Reise in die Welt der Softwareentwicklung begann mit der Sprache{" "}
          <strong className="text-yellow-400">C</strong> – und von da an gab es kein Zurück.
          <br /><br />
          Heute liegt mein Fokus auf{" "}
          <strong className="text-yellow-400">C#</strong>, 
          moderner{" "}
          <strong className="text-yellow-400">Webentwicklung</strong> und{" "}
          <strong className="text-yellow-400">künstlicher Intelligenz</strong>. 
          Ich entwickle leidenschaftlich Anwendungen, die nicht nur funktionieren, 
          sondern durchdacht, strukturiert und zukunftssicher sind.
          <br /><br />
          Ob Desktop-App, Web-App oder intelligente Systeme – ich liebe es, 
          komplexe Probleme zu verstehen und elegante Lösungen dafür zu bauen.
          <br /><br />
          Neben dem Informatikstudium in Wien arbeite ich regelmäßig an Projekten, 
          mit denen ich mein Wissen vertiefe und neue Technologien ausprobiere.
        </p>


      </motion.div>
    </section>
  );
}
