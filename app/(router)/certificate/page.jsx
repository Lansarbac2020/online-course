"use client"
import React, { useState } from 'react';
import Certificate from '../../../components/Certificates';
import { useUser } from '@clerk/nextjs';


function Home () {
const {user} =useUser();
const [userEnrolledCourses, setUserEnrolledCourses] = useState([]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <Certificate
        
         userEnrolledCourses='Introduction a la programmation c++'
        user={user}
        credentialNumber="123456789"
        signerName="params"
        signerTitle="Directeur de Programme"
      />
    </div>
  );
};

export default Home;
