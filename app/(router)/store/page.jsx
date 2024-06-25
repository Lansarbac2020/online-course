import React from 'react';
import Certificate from '../../../components/Certificates';


const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <Certificate
        courseName="Introduction à la Programmation"
        studentName="Bacoro Lansar"
        credentialNumber="123456789"
        signerName="Mr. Lansar"
        signerTitle="Directeur de Programme"
      />
    </div>
  );
};

export default Home;
