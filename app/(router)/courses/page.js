'use client';

import React, { useState, useEffect } from 'react';
import WelcomeBanner from './_components/WelcomeBanner';

import HeroSection from './_components/HeroSection';
import CourseList from './_components/CourseList';
import SideBanner from './_components/SideBanner';
import OurTeam from '../courses/_components/OurTeam';
import Partener from '../courses/_components/Partener';
import Testimonials from '../testimonial/page';
import Trust from '../courses/_components/Trust';
import Workflow from '../herosection/page';
import { Loader2 } from 'lucide-react';


function Courses() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., for data fetching or setup)
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
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
            <HeroSection/>        
    
            {/* Workflow Section */}
            <Workflow />

            {/* Partners Section */}
            <Partener />

            {/* Testimonials Section */}
        
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
