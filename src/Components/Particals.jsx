import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Particle = () => {
  const [init, setInit] = useState(false);
  
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // Optional: see console for debugging
    // console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      className="w-full h-full"
      particlesLoaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#fff" },
          links: {
            enable: true,
            distance: 120,
            color: "#fff",
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: { default: "bounce" },
            random: false,
            straight: false,
          },
          number: {
            value: 300,
            density: { enable: true, area: 800 },
          },
          opacity: {
            value: 0.7,
            animation: {
              enable: true,
              speed: 1.2,
              minimumValue: 0.3,
              sync: false,
            },
          },
          shape: { type: "circle" },
          size: {
            value: { min: 1, max: 2 },
            animation: {
              enable: false
            }
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
