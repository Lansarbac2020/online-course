import Image from 'next/image'
import React from 'react'

function CourseItem({course}) {
  return (
    <div className='border rounded-md
    hover:shadow-md 
    hover:shadow-purple-300
    cursor-pointer'>
        <Image src={course?.banner?.url}
        width={500}
        height={150}
        alt='banner'
        className='rounded-t-md h-[130px] object-cover'
        />
        <div className='flex flex-col gap-1 p-2'>
            <h2 className='font-medium'>{course.name}</h2>
            <h2 className='text-[12px] text-gray-400'>{course.author}</h2>
          {course?.chapter?.length==0 ?
           <div className='flex gap-2'>
                <Image src='/youtube.png'
                alt='youtube'
                width={20}
                height={20}
                />
                <h2 className='text-[14px] text-gray-400'>Watch On Youtube</h2>
            </div>:
            <div className='flex gap-2'>
                <Image src='/chapitre.png'
                alt='chapter'
                width={20}
                height={20}
                />
                <h2 className='text-[14px] text-gray-400'>{course?.chapter?.length}  Chapitres</h2>
            </div>}
            <h2 className='text-[15px]'>{course?.free?'Free':'Paid'}</h2>
        </div>
    </div>
  )
}

export default CourseItem