"use client";

import Particles from "@tsparticles/react"; // ✅ NICHT react-tsparticles
import type { ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const options: ISourceOptions = {
    fullScreen: { enable: false },
    background: { color: "#000000" },
    particles: {
      number: { value: 60 },
      color: { value: "#ffffff" },  
      links: {
        enable: true,
        color: "#ffffff",
        distance: 150,
        opacity: 0.15,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: "bounce",
      },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
  };

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 -z-10"
    />
  );
}
