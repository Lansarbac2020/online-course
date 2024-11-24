"use client"
import GlobalApi from '@/app/_utils/GlobalApi'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import CourseVideoDescription from '../../course-preview/[courseId]/_components/CourseVideoDescription';
import CourseContentSection from '../../course-preview/[courseId]/_components/CourseContentSection';
import { toast } from 'sonner';

function WatchCourse({params}) {
    const {user} =useUser();
    const [courseInfo, setCourseInfo] = useState([]);
    const [completedCahpter, setCompletedChapter] = useState();
   const [activeChapterIndex, setActiveChapterIndex] = useState(0);

    useEffect(()=>{

        params&&user&&getUserEnrolledCourseDetails();
    },[params&&user])
    const getUserEnrolledCourseDetails=()=>{
        GlobalApi.getUserEnrolledCourseDetails(params.enrollId, user.primaryEmailAddress.emailAddress).then(resp=>{
            setCompletedChapter(resp.userEnrollCourses[0].completedCahpter)
            setCourseInfo(resp.userEnrollCourses[0].courseList);
        })
    }

    // Save completed chapterId

    const onChapterCompleted=(chapterId)=>{
           GlobalApi.markChapterCompleted(params.enrollId, chapterId).then(resp=>{
            console.log(resp);
            if(resp){
                toast('Chapitre completer!!!');
                getUserEnrolledCourseDetails();
            }
           })
    }


  return courseInfo.name&&(
    <div className='mt-[100px]'>
        <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
        {/* Title video description */}
        <div className='col-span-2 bg-white dark:bg-[rgb(5,7,20)] p-3'>

        <CourseVideoDescription courseInfo={courseInfo}
        activeChapterIndex={activeChapterIndex}
        watchMode={true}
        setChapterCompleted={(chapterId)=>onChapterCompleted(chapterId)}/>
        </div>
        {/* Course content */}
       
        <div >
        

           <CourseContentSection courseInfo={courseInfo} isUserAlreadyEnrolled={true}
           watchMode={true}
           completedCahpter={completedCahpter}
           setActiveChapterIndex={(index)=>setActiveChapterIndex(index)
        }
           />
        </div>
    </div>
    </div>
  )
} 

export default WatchCourse