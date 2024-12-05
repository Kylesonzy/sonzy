import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const minimalPurpleParticlesConfig = {
  fullScreen: { enable: false },
  particles: {
    number: {
      value: 15, // Fewer particles for a minimal look
      density: {
        enable: true,
        value_area: 1000, // Spread particles across a larger area
      },
    },
    color: {
      value: ["#B19CD9", "#A084CA", "#7C5295"], // Unique purple gradients
    },
    shape: {
      type: ["circle", "star"], // Mix of circles and stars
      stroke: {
        width: 1,
        color: "#ffffff", // White stroke for added effect
      },
    },
    opacity: {
      value: 0.6,
      random: true,
      anim: {
        enable: true,
        speed: 0.8,
        opacity_min: 0.2,
        sync: false,
      },
    },
    size: {
      value: 7,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 3,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
  background: {
    color: "#3b2d71", // Updated to a darker purple background
  },
};

const ParticlesContainer3 = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={minimalPurpleParticlesConfig} // Updated variable name here
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 3, // Keeps the particles in the background
      }}
    />
  );
};

export default ParticlesContainer3;
