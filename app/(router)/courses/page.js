'use client'
import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import CourseList from './_components/CourseList'
import SideBanner from './_components/SideBanner'

function Courses() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 p-5 gap-5'>
      {/* Left Container  */}
      <div className='col-span-3'>
          {/* Banner  */}
            <WelcomeBanner/>

          {/* Course List  */}
            <CourseList/>
      </div>
      {/* Right Container */}
      <div className=' '>
        <SideBanner/>
      </div>
    </div>
  )
}

export default Courses