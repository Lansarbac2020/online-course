"use client";
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import SideBanner from '../courses/_components/SideBanner';
import WelcomeBannerDashboard from './_components/WelcomeBannerDashboard';
import InProgressCourseList from './_components/InProgressCourseList';
import GlobalApi from '@/app/_utils/GlobalApi';
import { Loader2 } from 'lucide-react';
function Dashboard() {
  const {user} = useUser();
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
     
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      // Cleanup the timer on component unmount
      return () => clearTimeout(timer);
    }, []);
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="bg-red-200"></div>
          <p className="ml-3 text-xl font-semibold"><Loader2 className='animate-spin text-lg text-primary' /> </p>
        </div>
      ) : (
        <div className='mt-[110px]'>
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  xl:grid-cols-4 gap-5 p-5'>
            {/* Left Container  */}
            <div className='col-span-1 lg:col-span-2  xl:col-span-3'>
              {/* Banner  */}
              <WelcomeBannerDashboard user={user} />
              {/* In progress courseList */}
              <InProgressCourseList userEnrolledCourses={userEnrolledCourses} />
            </div>
            {/* Right Container */}
            <div className=' sm:mt-[170px] p-2 col-span-1'>
              <SideBanner />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Dashboard