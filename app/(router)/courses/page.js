'use client';

import React, { useState, useEffect } from 'react';
import WelcomeBanner from './_components/WelcomeBanner';
import HeroSection from './_components/HeroSection';

import CourseList from './_components/CourseList';
import {TypewriterEffectDemo} from '../../../components/TextEffect.jsx';

import OurTeam from '../courses/_components/OurTeam';
import Partener from '../courses/_components/Partener';
import Testimonials from '../courses/_components/Testimonials';

import Workflow from '../herosection/page';
import { Loader2 } from 'lucide-react';



function Courses() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-[120px]">
      {loading ? (
        // Show loader while loading
        <div className="flex items-center justify-center h-screen">
          <div className="bg-red-200"></div>
          <p className="ml-3 text-xl font-semibold"><Loader2 className='animate-spin text-lg text-primary' /> </p>
        </div>
      ) : (
        // Render main content once loading is complete
        <div className="md:flex items-center justify-center grid grid-cols-1 p-5 m-3">
          {/* Left Container */}
          <div>
            {/* Welcome Banner */}
            <WelcomeBanner />

            {/* Course List */}
            <CourseList />

            {/* Team Section
            <OurTeam />

            {/* Trust Section 
            <Trust /> */}
            <TypewriterEffectDemo/>
            {/* <HeroSection/>         */}
    
            {/* Workflow Section */}
            <Workflow />

            {/* Partners Section */}
            <Partener />

            {/* Testimonials Section */}
           <Testimonials/>
            {/* our teams */}
            <OurTeam />
          </div>

          {/* Right Container */}
          {/* Uncomment if SideBanner is needed */}
          {/* <div>
            <SideBanner />
          </div> */}
        </div>
      )}
    </div>
  );
}

export default Courses;
