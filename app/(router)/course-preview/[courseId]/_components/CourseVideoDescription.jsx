import React from 'react';
import VideoPlayer from './VideoPlayer';
import Markdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { Item } from '@radix-ui/react-select';
import { Code, LucideTrophy, RadioTower, Youtube, YoutubeIcon } from 'lucide-react';
import Link from 'next/link';

function CourseVideoDescription({ courseInfo, activeChapterIndex, watchMode = false, setChapterCompleted }) {
  // Check if courseInfo exists before accessing its properties
  if (!courseInfo) {
    return <div>Loading...</div>; // or any other appropriate loading indicator
  }

  return (
    <div className='px-4 py-6 sm:px-6 lg:px-8'> 
      <h2 className='text-lg font-semibold'>{courseInfo.name}</h2>
      <h2 className='text-gray-500 text-sm mb-3'>{courseInfo.author}</h2>
       {/* Video player */}
      <VideoPlayer 
        videoUrl={courseInfo?.chapter[activeChapterIndex]?.video?.url}
        poster={!watchMode ? courseInfo?.banner?.url : null}
      />

      {/* description */}
      <h2 className='mt-5 text-lg font-semibold'>
        {watchMode ?
          <span className='flex justify-between items-center'>{courseInfo?.chapter[activeChapterIndex]?.name}
            <Button className='text-[10px] w-full' onClick={() => setChapterCompleted(courseInfo?.chapter[activeChapterIndex]?.id)}>Mark Completed</Button>
          </span>
          : <span>Description du cours</span>
        }
      </h2> 

      <Markdown className='text-base font-light mt-2 '>
        {watchMode ?
          courseInfo?.chapter[activeChapterIndex]?.shortDesc
          : courseInfo.description}
   
      </Markdown>
      <span>Author: </span>
       <span className='mr-4 text-base font-bold leading-6'>
        {courseInfo.author}
      </span>
      <div className='
        bg-white mt-5 font-bold'>
          Course Materials: 
          <span className=' ml-2 text-sm text-slate-500 justify-eve'>Retrouver ci-dessous les materiels du cours</span>
          <div className='flex gap-1 justify-center
          lg:justify-between mt-5'>
         {courseInfo?.demoUrl ? (
        <Link href={courseInfo.demoUrl}>
          <Button className='hover:scale-105 cursor-pointer gap-2'>
            <RadioTower className='' /> Demo Url
          </Button>
        </Link>
      ) : (
        <Button className='hover:scale-105 cursor-not-allowed gap-2' disabled>
          <RadioTower className='' /> Demo Url not available
        </Button>
      )}
             {courseInfo?.sourceCode? (
        <Link href={courseInfo.sourceCode}>
          <Button className='hover:scale-105 cursor-pointer gap-2'>
            <Code className='' /> Source code
          </Button>
        </Link>
      ) : (
        <>
          
        </>
      )}
         
   
         
         
          </div>
        </div>
    </div>
  );
}

export default CourseVideoDescription;
