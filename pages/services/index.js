import React from "react";
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import ParticlesContainer2 from "../../components/ParticlesContainer2";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="relative h-full py-36 flex items-center">
      <ParticlesContainer2 /> 
      <div
        className="relative z-10 container mx-auto" 
      >
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8 text-black" // Ensures the heading text is black
            >
              My <span className="text-accent">Services.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-black" // Ensures the paragraph text is black
            >
              I specialize in vulnerability scanning and ethical hacking to
              proactively identify and address security vulnerabilities. I ensure
              protection of endpoints and cloud-based systems, enhancing security
              across both physical and digital platforms.
            </motion.p>
          </div>
          {/* Scrollable slider on mobile */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] scrollable-slider"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
