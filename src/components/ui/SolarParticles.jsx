import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const SolarParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = {
    background: { opacity: 0 },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" }, // Particles link to mouse
      },
      modes: {
        grab: { distance: 150, links: { opacity: 0.5 } },
      },
    },
    particles: {
      color: { value: "#f97316" }, // Orange-500 from your theme
      links: {
        color: "#fbbf24", // Gold/Yellow links
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 4,
      },
      move: {
        enable: true,
        speed: 1.5, // Slow, floating movement
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
      number: {
        value: 100, // Particle density
        density: { enable: true, area: 800 },
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        className="absolute inset-0 z-0"
      />
    );
  }

  return null;
};

export default SolarParticles;