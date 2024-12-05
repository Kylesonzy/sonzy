import React, { useState } from 'react';
import { CgTerminal } from "react-icons/cg";
import { RiRedPacketLine } from "react-icons/ri";
import { CgCloud } from "react-icons/cg";
import { PiFileSqlThin } from "react-icons/pi";
import { GrGithub } from "react-icons/gr";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaCoins,
  FaExpeditedssl,
  FaLinux,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from 'react-icons/si';

//  about data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="javascript" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: 'Cyber Security Tools',
        icons: [
          <CgTerminal key="terminal" />,
          <CgCloud key="cloud" />,
          <RiRedPacketLine key="redpacket" />,
          <FaCoins key="coins" />,
          <FaExpeditedssl key="ssl" />,
          <PiFileSqlThin key="sql" />,
          <FaLinux key="linux" />,
          <GrGithub key="github" />,
        ]
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'UVA Hackathon Participant',
        stage: 'March 2024',
        icons: [], // Add icons if any, with keys
      },
      {
        title: 'Contribution to Cybersecurity Education Award',
        stage: '2023',
        icons: [], // Add icons if any, with keys
      },
      {
        title: 'Excellence in Cyber Defense Award - Honoree',
        stage: 'September 2022',
        icons: [], // Add icons if any, with keys
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Cybersecurity Analyst PureSugarWax',
        stage: 'Aug 2024 to Dec 2024',
        icons: [], // Add icons if any, with keys
      },
      {
        title: 'Hack The Box CTF Competitor',
        stage: 'Aug 2024 to Present',
        icons: [], // Add icons if any, with keys
      },
      {
        title: 'Volunteer Cybersecurity Consultant, NPO',
        stage: 'June 2024',
        icons: [], // Add icons if any, with keys
      },
      {
        title: 'Research Analyzer, SANS',
        stage: 'Oct 2024 to Present',
        icons: [], // Add icons if any, with keys
      },
      {
        title: 'Blue Team Malware Analysis',
        stage: '2023',
        icons: [], // Add icons if any, with keys
      },
      {
        title: 'Web Developer PureSugarWax',
        stage: '2022 to 2023',
        icons: [], // Add icons if any, with keys
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'MS in Applied Information Technology',
        stage: 'Spring 2026',
        icons: [], 
      },
      {
        title: 'BAS in Cyber Security',
        stage: 'Spring 2025',
        icons: [], 
      },
      {
        title: 'Google Cybersecurity Professional Certificate',
        stage: 'Dec 2024',
        icons: [], 
      },
      {
        title: 'AS in Cyber Security',
        stage: 'Dec 2024',
        icons: [],
      },
      {
        title: 'Network Administration CSC',
        stage: 'Issued September 2023',
        icons: [], 
      },
      {
        title: 'Business Information Tech CSC',
        stage: 'Issued October 2023',
        icons: [], 
      },
    ],
  },
];


// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-16 sm:py-20 text-center xl:text-left">
  <Circles />
  {/* Avatar Image */}
  <motion.div
    variants={fadeIn("right", 0.2)}
    initial="hidden"
    animate="show"
    exit="hidden"
    className="hidden xl:flex absolute bottom-0 -left-[370px]"
  ></motion.div>

  <div className="container mx-auto px-4 sm:px-6 h-full flex flex-col items-center xl:flex-row gap-6">
    {/* Text Section */}
    <div className="flex-1 flex flex-col justify-center">
      <motion.h2
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="h2 text-lg sm:text-2xl xl:text-4xl font-bold text-center sm:text-center xl:text-left"
      >
        Securing the<span className="text-accent"> future. </span>
      </motion.h2>
      <motion.p
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="text-sm sm:text-base xl:text-lg max-w-full sm:max-w-[400px] md:max-w-[500px] mx-auto sm:mx-auto xl:mx-0 mb-4 xl:mb-12 leading-tight sm:leading-relaxed"
      >
        I started my ethical hacking journey three years ago when I was just 17
        years old. Fascinated by the challenges and opportunities in cybersecurity,
        I delved into ethical hacking and penetration testing.
      </motion.p>
      {/* Counters Section */}
      {/* Counters Section */}
<motion.div
  variants={fadeIn("right", 0.6)}
  initial="hidden"
  animate="show"
  exit="hidden"
  className="flex flex-wrap justify-center md:justify-between gap-y-6 md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
>
  <div className="flex flex-col items-center md:items-start relative flex-1 text-center md:text-left after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
      <CountUp start={0} end={3} duration={5} /> +
    </div>
    <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
      Years of Experience
    </div>
  </div>
  <div className="flex flex-col items-center md:items-start relative flex-1 text-center md:text-left after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
      <CountUp start={0} end={999} duration={5} /> +
    </div>
    <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
      Packets Captured
    </div>
  </div>
  <div className="flex flex-col items-center md:items-start relative flex-1 text-center md:text-left after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
      <CountUp start={0} end={35} duration={5} /> +
    </div>
    <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
      Pwned Machines
    </div>
  </div>
  <div className="flex flex-col items-center md:items-start relative flex-1 text-center md:text-left">
    <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
      <CountUp start={0} end={3} duration={5} /> +
    </div>
    <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
      Winning Awards
    </div>
  </div>
</motion.div>


    </div>

{/* Info Section */}
<motion.div
  variants={fadeIn("left", 0.4)}
  initial="hidden"
  animate="show"
  exit="hidden"
  className="flex flex-col w-full xl:max-w-[48%] h-auto sm:h-[480px] py-2 sm:py-4 mt-[-10px] sm:mt-[-5px]"
>
  {/* Section Tabs */}
  <div className="flex gap-x-2 sm:gap-x-4 justify-center xl:justify-start mb-4 sm:mb-6 flex-wrap">
    {aboutData.map((item, itemIndex) => (
      <div
        key={itemIndex}
        className={`cursor-pointer capitalize text-sm sm:text-base xl:text-lg relative ${
          index === itemIndex
            ? "text-accent after:w-full after:bg-accent after:transition-all after:duration-300"
            : "text-white/60"
        } after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
        onClick={() => setIndex(itemIndex)}
      >
        {item.title}
      </div>
    ))}
  </div>

  {/* Content */}
  <div className="py-2 xl:py-6 flex flex-wrap gap-y-4 gap-x-4 items-center xl:items-start justify-center xl:justify-start text-center sm:text-left">
    {aboutData[index].info.map((item, itemIndex) => (
      <div
        key={itemIndex}
        className="flex flex-col sm:flex-row items-center sm:items-start gap-x-2 text-xs sm:text-sm text-white/80"
      >
        <div className="font-light">{item.title}</div>
        {item.stage && <div className="hidden sm:block">-</div>}
        {item.stage && <div>{item.stage}</div>}
        {item.icons?.length > 0 && (
          <div className="flex gap-x-2">
            {item.icons.map((icon, iconIndex) => (
              <div key={iconIndex} className="text-xl sm:text-2xl">
                {icon}
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
</motion.div>


  </div>
</div>

  );
};

export default About;
