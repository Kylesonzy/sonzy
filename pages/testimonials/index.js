// components
import TestimonialSlider from '../../components/TestimonialSlider';
import ParticlesContainer3 from '../../components/ParticlesContainer3'; // Import the new particles container

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Testimonials = () => {
  return (
    <div className='relative h-full py-32 text-center'>
      {/* Add ParticlesContainer3 as the background */}
      <ParticlesContainer3 /> 
      <div className='container mx-auto h-full flex flex-col justify-center relative z-10'>
        {/* title */}
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 mb-2 xl:mb-0 text-black' 
        >
          What clients <span className='text-accent'>say.</span>
        </motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          <TestimonialSlider />
        </motion.div>
      </div>

      <div className="absolute bottom-16 right-4 z-20 sm:bottom-24 sm:right-2 md:bottom-16 md:right-4">
  <img
    src="/cyber2.gif"
    alt="Cyber Animation"
    className="w-32 h-32 md:w-48 md:h-48 sm:w-28 sm:h-28"
  />
</div>



    </div>
  );
};

export default Testimonials;
