'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CourseVideoDescription from './_components/CourseVideoDescription'
import GlobalApi from '@/app/_utils/GlobalApi'
import CourseEnrollSection from './_components/CourseEnrollSection'
import CourseContentSection from './_components/CourseContentSection'
import { useUser } from '@clerk/nextjs'

function CoursePreview({params}) {

  const {user} = useUser();
    const [courseInfo, setCourseInfo] = useState();
    const [isUserAlreadyEnrolled, setIsUserAlreadyEnrolled] = useState();
  useEffect(()=>{
        params && getCourseInfoById();
  }, [params])


  useEffect(()=>{
    courseInfo&&user&&checkUserEnrolledToCourse();
  },[courseInfo,user])
//  Get course Info by slug Name

  const getCourseInfoById = ()=>{
      GlobalApi.getCourseById(params?.courseId).then(resp=>{
        //console.log(resp);
        setCourseInfo(resp?.courseList)
       
      })
  }


    // to checked user already enrolled to the course 
    const checkUserEnrolledToCourse=()=>{
        GlobalApi.checkeUserEnrolledToCourse(courseInfo.slug, user.primaryEmailAddress.emailAddress).then(resp=>{
          console.log(resp);
          if(resp?.userEnrollCourses)
          {
              setIsUserAlreadyEnrolled(resp?.userEnrollCourses[0]?.id)
          }
        })
    }


  return courseInfo&& (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3 mt-[120px]'>
        {/* Title video description */}
        <div className='col-span-2 bg-white dark:bg-[#11001f]  p-3 lg:max-w-[1200px]'>

        <CourseVideoDescription courseInfo={courseInfo}/>
        </div>
        {/* Course content */}
       
        <div >
          <CourseEnrollSection courseInfo={courseInfo} isUserAlreadyEnrolled={isUserAlreadyEnrolled}/>

          <CourseContentSection courseInfo={courseInfo} isUserAlreadyEnrolled={isUserAlreadyEnrolled}/>
        </div>
    </div>
  )
}

export default CoursePreview