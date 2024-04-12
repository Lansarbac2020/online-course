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
    <div>
          <div className='grid grid-cols-1 md:grid-cols-4 p-5 gap-5'>
      {/* Left Container  */}
      <div className='col-span-3'>
          {/* Banner  */}
     <WelcomeBannerDashboard user={user}/>
     {/* In progress courseList */}
     <InProgressCourseList userEnrolledCourses={userEnrolledCourses}/>
      </div>
      {/* Right Container */}
      <div className=' '>
        <SideBanner/>
      </div>
    </div>
    </div>
  )
}

export default Dashboard