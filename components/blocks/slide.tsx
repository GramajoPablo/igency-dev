import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

interface Service {
  title: string;
  description: string;
}

interface ServicesSliderProps {
  services: Service[];
}

const ServicesSlider: React.FC<ServicesSliderProps> = ({ services }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="relative px-4 md:px-8">
      <div className="absolute top-0 transform -translate-y-12 z-10 flex items-center space-x-4">
        <div className="swiper-button-prev">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="swiper-button-next">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.5,
            centeredSlides: false,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2.5,
            centeredSlides: false,
          },
          1280: {
            slidesPerView: 3.5,
            centeredSlides: false,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{ width: '100%' }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div
              className={`p-10 rounded-lg shadow-lg transition-all duration-300 folded-corner w-full max-w-sm ${
                hoveredIndex === index ? 'bg-[#FFFF04]' : 'bg-[#202D17]'
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <h2
                className={`text-2xl font-semibold mb-4 ${
                  hoveredIndex === index ? 'text-[#202D17]' : 'text-[#F9FAEF]'
                }`}
              >
                {service.title}
              </h2>
              <p
                className={`transition-colors duration-300 ${
                  hoveredIndex === index ? 'text-[#202D17]' : 'text-[#F9FAEF]'
                }`}
              >
                {service.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesSlider;