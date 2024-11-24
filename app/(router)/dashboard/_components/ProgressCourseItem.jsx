import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Download, EyeIcon, ViewIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function ProgressCourseItem({ course }) {

  const getTotalCompletedChapterPerc = (item) => {
    const totalChapters = item?.courseList?.chapter?.length || 0;
    const completedChapters = item.completedCahpter?.length || 0;
    const perc = (completedChapters / totalChapters) * 100;
    // Limiter le pourcentage à 100% et s'assurer qu'il ne dépasse pas la valeur maximale
    return Math.min(perc, 100).toFixed(0);
  }

  return (
    
      <div className='border dark:border-white/45 rounded-md'>
        <Image src={course.courseList?.banner?.url}
          width={500}
          height={150}
          alt='banner'
          className='rounded-t-md h-[130px] object-cover'
        />
        <div className='flex flex-col gap-1 p-2'>
          <h2 className='font-medium'>{course.courseList?.name}</h2>
          <h2 className='text-[12px] text-gray-400'>{course.courseList?.author}</h2>
          <h2 className='text-[12px] text-gray-400 mt-3'>
            {getTotalCompletedChapterPerc(course)}%
            <span className='float-right'>{Math.min(course.completedCahpter?.length || 0, course?.courseList?.chapter?.length || 0)}/{course?.courseList?.chapter?.length} Chapters</span>
          </h2>
          <div className='bg-black dark:bg-white'> </div>
          <Progress value={getTotalCompletedChapterPerc(course)} className="h-[7px] dark:bg-white" />
        </div>
        {/* Afficher l'icône de téléchargement si le progrès du cours est de 100% */}
      
       
          <div className="flex justify-between p-2">
          {getTotalCompletedChapterPerc(course) === '100' && (
            <Link href={'/certificate/'}>
            <Button className='text-white
             hover:scale-105'>
              <span className='md:hidden'>Certificate</span>
              <Download className=' ml-3 text-white' />
            </Button> 
            </Link>
            )}
            {/* view button */}
            <Link href={'/course-preview/'+course?.courseList?.slug}>
            <Button className=' flex
            hover:scale-105
            dark:border
            dark:border-white
            dark:bg-[rgb(5,7,20)]
            justify-start text-white '>
               <span className='md:hidden'>View</span> <EyeIcon className='ml-3 text-white' />
            </Button>
            </Link>
          
          </div>
        
     
      </div>
    
  )
}

export default ProgressCourseItem;

