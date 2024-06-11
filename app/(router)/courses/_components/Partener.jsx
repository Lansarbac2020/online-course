

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const partners = [
  { id: 1, name: 'Orange', logo: '/orangemali.png', url: 'https://www.orange.com' },
  { id: 2, name: 'MaliGov', logo: '/gov-of-mali.png', url: 'https://koulouba.ml/' },
  { id: 3, name: 'Partner 3', logo: '/udmylogo.png', url: 'https://udemy.com' }
];

function Partener() {
  return (
    <div className="p-3 max-w-[1200px] translate-x-[2px] rounded-md bg-white py-10 p-5rounded-lg mt-3">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Nos Partenaires</h2>
      </div>
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {partners.concat(partners).map((partner, index) => (
            <Link href={partner.url} key={index}>
              <div className="flex items-center justify-center p-4 bg-gray-50 shadow-md rounded-md min-w-[150px] hover:cursor-pointer
              hover:shadow-slate-400">
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
      </div>
    </div>
  );
}

export default Partener;