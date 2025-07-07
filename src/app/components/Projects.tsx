"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Monster Trading Card Game (Rest API)",
      tech: "C#, .NET, PostgreSQL",
      image: "/projects/tcg.png",
      github: "https://github.com/Nolahuhu/TCG",
    },
    {
      title: "DSML Price Prediction",
      tech: "Python, scikit-learn, XGBoost, Pandas",
      image: "/images/dsml.png",
      github: "https://github.com/theladykiller/DSML-Price-prediction",
    },
    {
      title: "TourPlanner Desktop-App",
      tech: "C#, WPF, PostgreSQL, OpenRouteService",
      image: "/projects/tourplanner.png",
      github: "https://github.com/Nolahuhu/Meintour",
    },
  ];

  return (
    <section id="projects" className="bg-black text-white px-4 sm:px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Meine Projekte
        </motion.h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row md:items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="group w-full md:w-1/2 overflow-hidden rounded-xl border-4 border-transparent hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  layout="responsive"
                  className="rounded-xl"
                />
              </motion.div>
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="italic text-sm text-gray-400">{project.tech}</p>
                <div className="flex gap-6 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b-2 border-white hover:text-gray-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
