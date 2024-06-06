"use client";
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import SideBanner from '../courses/_components/SideBanner';
import WelcomeBannerDashboard from './_components/WelcomeBannerDashboard';
import InProgressCourseList from './_components/InProgressCourseList';
import GlobalApi from '@/app/_utils/GlobalApi';
function Dashboard() {
  const {user} = useUser();

  const [userEnrolledCourses, setUserEnrolledCourses] = useState([]);


  useEffect(()=>{
     user&&getAllUserEnrolledCourses();

  },[user])

  const getAllUserEnrolledCourses= ()=>{
    GlobalApi.getUserAllEnrolledCourseList(user.primaryEmailAddress.emailAddress).then(resp=>{
        console.log(resp);
        setUserEnrolledCourses(resp.
          userEnrollCourses
          );
    })
  }
  return (
    <div className='mt-[90px]'>
          <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5'>
      {/* Left Container  */}
      <div className='col-span-1 lg:col-span-2 xl:col-span-3'>
          {/* Banner  */}
     <WelcomeBannerDashboard user={user}/>
     {/* In progress courseList */}
     <InProgressCourseList userEnrolledCourses={userEnrolledCourses}/>
      </div>
      {/* Right Container */}
      <div className=' sm:mt-[170px] col-span-1'>
        <SideBanner/>
      </div>
    </div>
    </div>
  )
}

export default Dashboard