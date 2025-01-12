"use client";
 
import { Contact1 } from "@/blocks/contact/contact1";
 import Hero7  from "@/blocks/hero/hero7";

import Section03  from "@/components/blocks/section03";
export default function Home() {
  const property = {
    imageURL: '/public/hero5.png',
    imageAlt: 'Property Image',
    beds: 3,
    baths: 2,
    title: 'Beautiful Beach House',
    formattedPrice: '$1,200',
    rating: 4,
    reviewCount: 120,
  };

  

  return (
    <>
        
      <Section03 />
      <Hero7 />
      <Contact1 /> 
    </>
  );
}

