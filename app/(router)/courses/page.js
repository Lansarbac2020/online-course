'use client'
import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import CourseList from './_components/CourseList'
import SideBanner from './_components/SideBanner'
import OurTeam from '../courses/_components/OurTeam'
import Partener from '../courses/_components/Partener'
import Testimonials from '../testimonial/page'
import Trust from '../courses/_components/Trust';
import Workflow from '../herosection/page'

function Courses() {
  return (
    <div className='mt-[120px]'>
      <div className='md:flex items-center justify-center grid grid-cols-1 p-5 m-3'>
      {/* Left Container  */}
      <div className=''>
          {/* Banner  */}
           <WelcomeBanner/> 

          {/* Course List  */}
            <CourseList/>
           <OurTeam/>
           <Trust/>
           <Workflow/>
      <Partener/>
      <Testimonials/>
      </div>
      {/* Right Container
      <div className=''>
        <SideBanner/>
      </div> */}
      </div>
     
    </div>
  )
}

export default Courses