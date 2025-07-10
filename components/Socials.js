// links
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaSnapchat } from "react-icons/fa6";
import { SlSocialSpotify } from "react-icons/sl";


// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
      <Link href={'https://github.com/Kylesonzy'} className='hover:text-accent transition-all duration-300'>
        <FaGithub />
      </Link>
      <Link href={'https://www.instagram.com/kylesonzy/'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/kyle-kim-614961246/'} className='hover:text-accent transition-all duration-300'>
        <SlSocialLinkedin />
      </Link>
      <Link href={'https://open.spotify.com/user/gty629rfu9ym8ovhydogg3ue7?si=b1ae817d4b314bb3'} className='hover:text-accent transition-all duration-300'>
        <SlSocialSpotify />
      </Link>
    </div>
  );
};

export default Socials;
