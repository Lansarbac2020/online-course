
import React from 'react'
import ProgressCourseItem from './ProgressCourseItem'
function InProgressCourseList({userEnrolledCourses}) {
  return (
<div className='p-5 bg-white dark:bg-[#11001f] mt-3 rounded-sm'>
        <h2 className='text-primary text-[18px] font-semibold dark:text-white'>Les cours récemment inscrits</h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-3 gap-5 '>
            {userEnrolledCourses.length>0?userEnrolledCourses.map((item,index)=>(
                <ProgressCourseItem key={index}
                course={item}
                />
            ))
            :
            [1,2,3,4].map((item,index)=>(
              <div className='h-[200px] w-[230px] bg-slate-200 dark:bg-slate-500 animate-pulse'></div>
            ))
          }
        </div>
    </div>
  )
}

export default InProgressCourseList