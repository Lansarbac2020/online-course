import Image from 'next/image';
import React from 'react';

function WelcomeBanner() {
  return (
    <div className='flex flex-col md:flex-row gap-5 items-center bg-white rounded-xl p-5'>
      <Image src='/bannerschool.png' alt='Bannerimage' width={100} height={100} />
      <div>
        <h2 className='font-bold text-2xl md:text-3xl'>
          Bienvenue dans <span className='text-primary'>Lansar-Center</span> Academy
        </h2>
        <h2 className='text-gray-500 text-sm md:text-base'>
          Explorez, apprenez et créez vos propres projets réels
        </h2>
      </div>
    </div>
  );
}

export default WelcomeBanner;
