import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function SocialNetworks() {
  return (
    <div className='flex flex-row gap-3 float-right p-5 mb-7'>
      <Instagram className="text-blue-500 cursor-pointer mb-3 hover:text-gray-500" />
      <Linkedin className="text-blue-500 cursor-pointer mb-3 hover:text-gray-500"  />
      <Youtube className="text-blue-500 cursor-pointer mb-3 hover:text-gray-500"  />
     <Link href='https://google.com'>  <Facebook className="text-blue-500 cursor-pointer mb-3 hover:text-gray-500" /></Link>
    </div>
  );
}

export default SocialNetworks;
