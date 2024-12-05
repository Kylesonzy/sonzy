import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

// import required modules
import { FreeMode, Pagination } from 'swiper';

// service data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Threat Identification',
    description: 'Comprehensive scanning of systems to identify security vulnerabilities providing detailed reports.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Penetration Testing',
    description: 'Simulated cyber attacks on systems, networks, or web applications to evaluate the exploitable vulnerabilities.',
  },
  {
    icon: <RxDesktop />,
    title: 'Web Security Testing',
    description: 'Specialized testing focused on web applications to detect security threats such as SQL injection and XSS.',
  },
  {
    icon: <RxReader />,
    title: 'IoT Security Services',
    description: ' Security solutions tailored to protect devices and networks, addressing challenges posed by IoT configs.',
  },
  {
    icon: <RxRocket />,
    title: 'Cloud Security',
    description: 'Assessments of cloud platforms and environments to secure cloud-based infrastructure and data.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              {/* title & description */}
              <div className='mb-8'>
                <div className='mb-2 text-lg text-black'>{item.title}</div> 
                <p className='max-w-[350px] leading-normal text-black'>{item.description}</p> 
              </div>
              {/* arrow */}
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
