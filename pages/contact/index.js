// components
import ParticlesContainer from '../../components/ParticlesContainer';
import { useState } from 'react';
const emailjs = require('emailjs-com');

// icons
import { BsArrowRight } from 'react-icons/bs';

// framer
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

const Contact = () => {
  const [name, setName] = useState ("")
  const [email, setEmail] = useState ("")
  const [subject, setSubject] = useState ("")
  const [message, setMessage] = useState ("")
  const handleClick = () => {

    const form = {
      name: name,  
      email: email,
      subject: subject,
      message: message,
    }
    emailjs.init('TA6bUHt5JkzpCmhnl')
    emailjs.send('service_7j20pic', 'template_b6ufc9m', form).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
  }
  const handleNameChange = (event) => {
    setName(event.target.value);
};

const handleEmailChange = (event) => {
    setEmail(event.target.value);
};
const handleSubjectChange = (event) => {
  setSubject(event.target.value);
};

const handleMessageChange = (event) => {
  setMessage(event.target.value);
};
var templateParams = {
  
};

  return (
    <div className='h-full relative'>
      {/* Particles as background */}
      <ParticlesContainer className="absolute inset-0 z-[-1]" />

      {/* Container centered with flex */}
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* Text & Form container */}
        <div className='flex flex-col w-full max-w-[700px] z-[1] relative'>
          {/* Heading */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>
          
          {/* Form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='name' className='input' value={name} onChange={handleNameChange} />
              <input type='text' placeholder='email' className='input' value={email} onChange={handleEmailChange} />
            </div>
            <input type='text' placeholder='subject' className='input' value={subject} onChange={handleSubjectChange} />
            <textarea placeholder='message' className='textarea' value={message} onChange={handleMessageChange}></textarea>
            <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group' onClick={handleClick}>

              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let's talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
