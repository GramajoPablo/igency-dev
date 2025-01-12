import React from 'react';
import ServicesSlider from './slide';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Branding',
      description: 'Here, we ignite imaginations, harnessing the power of technology to create immersive digital experiences that captivate and inspire.',
    },
    {
      title: 'Development',
      description: 'Here, we ignite imaginations, harnessing the power of technology to create immersive digital experiences that captivate and inspire.',
    },
    {
      title: 'Strategy',
      description: 'Here, we ignite imaginations, harnessing the power of technology to create immersive digital experiences that captivate and inspire.',
    },
    {
      title: 'Digital Marketing',
      description: 'We help businesses grow by leveraging the power of digital marketing.',
    },
  ];

  return (
    <section className="bg-[#F9FAEF] py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="text-center md:text-left">
            <h1 className="max-w-content text-4xl sm:text-5xl font-bold text-gray-900">
              COMPREHENSIVE HIGH-GRADE SOLUTIONS FOR YOUR BRAND
            </h1>
          </div>
          <div className="text-center md:text-right flex items-center justify-end">
            <p className="text-lg text-gray-600 font-medium tracking-wider">
              SERVICES WE PROVIDE
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto">
        <div className="relative w-full pl-4 sm:pl-6 lg:pl-8">
          <div className="md:w-[calc(100vw-((100vw-1400px)/2))] w-[calc(100vw-1rem)] overflow-visible">
            <ServicesSlider services={services} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;