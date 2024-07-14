'use client'
import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import CourseList from './_components/CourseList'
import SideBanner from './_components/SideBanner'
import OurTeam from '../courses/_components/OurTeam'
import Partener from '../courses/_components/Partener'
import Testimonials from '../testimonial/page'
import Trust from '../courses/_components/Trust';

function Courses() {
  return (
    <div className='mt-[90px]'>
      <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5'>
      {/* Left Container  */}
      <div className='col-span-3'>
          {/* Banner  */}
           <WelcomeBanner/> 

          {/* Course List  */}
            <CourseList/>
           <OurTeam/>
           <Trust/>
      <Partener/>
      <Testimonials/>
      </div>
      {/* Right Container */}
      <div className=''>
        <SideBanner/>
      </div>
      </div>
     
    </div>
  )
}

export default Courses