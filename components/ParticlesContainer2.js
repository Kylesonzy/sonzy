import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// Custom particle configuration for a unique look
const uniqueParticlesConfig = {
  fullScreen: { enable: false },
  particles: {
    number: {
      value: 120, // Higher particle count for visual density
      density: {
        enable: true,
        value_area: 1000, // Wider spread area
      },
    },
    color: {
      value: ["#FFFFFF", "#000000"], // Black and white particles
    },
    shape: {
      type: ["circle", "star"], // Circle and star shapes
      stroke: {
        width: 1,
        color: "#FF69B4", // Light pink stroke for particles
      },
    },
    opacity: {
      value: 0.8, // Semi-transparent particles
      random: true,
      anim: {
        enable: true,
        speed: 1.5,
        opacity_min: 0.4,
        sync: false,
      },
    },
    size: {
      value: 6, // Slightly larger particles
      random: true,
      anim: {
        enable: true,
        speed: 6,
        size_min: 2,
        sync: false,
      },
    },
    move: {
      enable: true,
      speed: 4, // Smooth and consistent motion
      direction: "top", // Particles float upwards
      random: true,
      straight: false,
      out_mode: "out", // Particles exit the canvas area
      attract: {
        enable: false,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble", // Particles grow on hover
      },
      onclick: {
        enable: true,
        mode: "push", // Adds more particles on click
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 150,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 200,
        size: 12,
        duration: 2,
        opacity: 0.9,
        speed: 2,
      },
      repulse: {
        distance: 120,
        duration: 0.5,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  background: {
    color: "#FFD6E7", // Light pink background
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
};

const ParticlesContainer2 = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles2"
      init={particlesInit}
      options={uniqueParticlesConfig} // Use the customized config
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0, // Keeps particles behind content
      }}
    />
  );
};

export default ParticlesContainer2;
