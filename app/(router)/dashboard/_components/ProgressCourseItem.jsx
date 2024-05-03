import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Download } from 'lucide-react'
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
    <Link href={'/course-preview/' + course?.courseList?.slug}>
      <div className='border rounded-md hover:shadow-md hover:shadow-purple-300 cursor-pointer'>
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
          <div className='bg-black'> </div>
          <Progress value={getTotalCompletedChapterPerc(course)} className="h-[7px]" />
        </div>
        {/* Afficher l'icône de téléchargement si le progrès du cours est de 100% */}
        {getTotalCompletedChapterPerc(course) === '100' && (
          <div className="flex justify-end p-2">
            {/* Utilisez un bouton ou un lien pour rendre l'icône de téléchargement cliquable */}
            <Button className='text-primary hover:text-slate-400'>
              <Download className='text-white' />
            </Button>
          </div>
        )}
        {/* Afficher un message de réussite après le téléchargement du certificat */}
        {/* {generateCertificate && (
          <div className="flex justify-end p-2 text-green-500">Certificate downloaded successfully</div>
        )} */}
      </div>
    </Link>
  )
}

export default ProgressCourseItem;

