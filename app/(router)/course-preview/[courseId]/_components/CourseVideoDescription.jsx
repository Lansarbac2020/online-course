import React from 'react';
import VideoPlayer from './VideoPlayer';
import Markdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { Item } from '@radix-ui/react-select';

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
    </div>
  );
}

export default CourseVideoDescription;
