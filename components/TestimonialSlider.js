import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

// testimonial slider data
export const testimonialSlider = [
  {
    image: "/aaronicon.png",
    name: "Aaron Park",
    position: "Customer",
    message:
      " Kyle helped me resolve my DNS issues by identifying and correcting misconfigurations, ensuring my domain names resolved correctly.",
  },
  {
    image: "/hamad.jpg",
    name: "Hamad",
    position: "Friend",
    message:
      "my homie kyle helped me with my firewall and internet config",
  },
  {
    image: "/phong.jpg",
    name: "Phong",
    position: "Customer",
    message:
      "bossman helped me with my cybersecurity homework and helped me configure a multiproxy tool when i was browsing tor",
  },
  {
    image: "/joanne.jpg",
    name: "Joanne",
    position: "Customer",
    message:
      "kyle fixed my computer. i vouch for him",
  },
  {
    image: "/jordan.jpg",
    name: "Jordan Tran",
    position: "Friend",
    message:
      "Kyle assisted me in filtering packets on my system after it was infiltrated, helping to identify and block suspicious traffic. His expertise ensured that my network was safeguarded.",
  },
  {
    image: "/emily.png",
    name: "Emily",
    position: "Customer",
    message:
      "Kyle helped me generate strong, secure passwords to fortify my accounts against potential breaches. His guidance was invaluable in enhancing my overall security posture.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialSlider.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* Avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* Avatar */}
                <div className="mb-2 mx-auto w-[250px] h-[250px] relative">
                  <Image
                    src={person.image}
                    alt={person.name}
                    layout="fill" // Makes the image fill the container
                    objectFit="cover" // Ensures proper aspect ratio
                    className="rounded-full border-4 border-white shadow-lg"
                  />
                </div>
                {/* Name */}
                <div className="text-lg font-bold">{person.name}</div>
                {/* Position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>
            {/* Quote & Message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* Quote Icon */}
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
              </div>
              {/* Message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
