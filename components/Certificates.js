import React from 'react';
import Image from 'next/image';
import mylogo from '../public/mylogo.jpg';

const Certificate = ({ courseTitle, user, credentialNumber }) => {
  const currentDate = new Date().toLocaleDateString();

  console.log(courseTitle, user, credentialNumber);  // Debugging step: log the props

  return (
    <div className="mt-[90px] w-a4-landscape-width h-a4-landscape-height mx-auto p-10 border-4 border-gray-800 shadow-lg bg-white flex flex-col justify-between">
      <div className="flex justify-between items-center mb-8">
        <div>
          <Image src={mylogo} alt="Logo" width={100} height={100} className="mr-4" />
        </div>
        <div>
          <h1 className="text-5xl font-bold text-gray-800 translate-y-[100px]">Certificat de Réussite</h1>
        </div>
        <div className="w-24"></div>
      </div>
      <div className="text-center">
        <p className="text-xl text-gray-700 mb-2 uppercase">Ce certificat est décerné à</p>
        <h2 className="text-4xl font-semibold text-primary mb-4">{user?.fullName}</h2>
        <p className="text-xl text-gray-700 mb-2">pour avoir complété avec succès le cours</p>
        <h3 className="text-3xl italic text-primary mb-8">{courseTitle}</h3>
      </div>
      <div className="flex justify-between items-center mt-8">
        <div>
          <p className="text-lg text-gray-700">Date : {currentDate}</p>
        </div>
        <div>
          <p className="text-lg text-gray-700">Numéro de référence : {credentialNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
