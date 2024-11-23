import Image from 'next/image';
import React from 'react';

function WelComeBannerNewsletter() {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-[#11001f] rounded-xl p-5">
      <Image
        src={'/bannerschool.png'}
        width={250}
        height={150}
        alt='newsletter'
        className="mb-5"
      />
      <div className="text-center ">
        <h1 className="text-2xl font-bold text-primary dark:text-white sm:text-3xl">
          Rejoignez la NewsLetter maintenant
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-200">
          Recevez les dernières nouvelles, offres et cours avec la newsletter Ika'kalanso directement dans votre boîte de réception
        </p>
      </div>
    </div>
  );
}

export default WelComeBannerNewsletter;
