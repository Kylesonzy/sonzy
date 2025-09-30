// next image
import Image from 'next/image';

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Home = () => {
  return (
    <div className='bg-primary/60 h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'
          >
            Hello, <br /> Im
<span className="typewriter1"> Kyle Kim</span>

            
          </motion.h1>
          {/* subtitle */}
          <motion.p
  variants={fadeIn('down', 0.3)}
  initial='hidden'
  animate='show'
  exit='hidden'
  className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-lg md:text-xl font-medium text-white'
>
  a future cyber security analyst &amp; penetration tester
<div className="mt-6 flex justify-center xl:justify-start"></div>
<a
  href="KyleKimJResumeREV2.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-transparent border border-white text-white px-6 py-1 rounded-md font-semibold hover:bg-white hover:text-black transition"
>
  View My Resume
</a>

</motion.p>




    
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={fadeIn('up',0.5)}
        initial='hidden'
        animate='show'
        exit='hidden'
        transition={{duration: 1, ease: 'easeInOut'}}
        className='w-full h-full max-w-[1000px] max-h-[1000px] absolute -bottom-20 lg:bottom-20 lg:right-[8%]'
        
        >
          <Avatar />
      </motion.div>

      {/* image */}
      <div className='w-[1920px] h-full absolute right-0 bottom-0'>
        {/* particles */}
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;
