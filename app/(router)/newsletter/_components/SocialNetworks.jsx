import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

function SocialNetworks() {
  return (
    <div className='flex flex-row gap-3 float-right p-5 mb-7'>
     <Link href='https://www.instagram.com/agoee_mali/'> <Instagram className="text-gray-500 cursor-pointer mb-3 hover:text-blue-500" /></Link>
      <Link href='https://www.linkedin.com/in/lansarbacoroceolansarcenter/'><Linkedin className="text-gray-500 cursor-pointer mb-3 hover:text-blue-500" /></Link>
     <Link href='https://www.youtube.com/channel/UCq1PwIgAZnanOoNti1l-J5g'> <Youtube className="text-gray-500 cursor-pointer mb-3 hover:text-blue-500"/></Link>
     <Link href='https://www.facebook.com/profile.php?id=100064973313047&paipv=0&eav=Afb27cy4yaa1ZuKR7xNQU0gcTrUrNaAnAgABsHpQYySYgnRXte9C1d3-_esdivokZjE'>  <Facebook className="text-gray-500 cursor-pointer mb-3 hover:text-blue-500" /></Link>
    </div>
  );
}

export default SocialNetworks;
