"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const partners = [
  { id: 1, name: 'Orange', logo: '/orangemali.png', url: 'https://www.orange.com' },
  { id: 2, name: 'MaliGov', logo: '/gov-of-mali.png', url: 'https://koulouba.ml/' },
  { id: 3, name: 'Partner 3', logo: '/udmylogo.png', url: 'https://udemy.com' },

];

function Partner() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-[1200px] translate-x-[2px] rounded-md bg-white py-10 p-5 mt-3 relative">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Nos Partenaires</h2>
      </div>
      <div className="container mx-auto px-4 overflow-hidden relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full hover:bg-gray-400"
        >
          &lt;
        </button>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scrollbar-hide whitespace-nowrap scroll-smooth"
        >
          {partners.concat(partners).map((partner, index) => (
            <Link href={partner.url} key={index}>
              <div className="flex items-center justify-center p-4 shadow-md rounded-md min-w-[150px] hover:cursor-pointer hover:shadow-slate-400">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full hover:bg-gray-400"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Partner;
