import React from 'react';
import VideoPlayer from './VideoPlayer';
import Markdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { Item } from '@radix-ui/react-select';

function CourseVideoDescription({ courseInfo, activeChapterIndex, watchMode=false,setChapterCompleted }) {
  // Check if courseInfo exists before accessing its properties
  if (!courseInfo) {
    return <div>Loading...</div>; // or any other appropriate loading indicator
  }

  return (
    <div> 
      <h2 className='text-[20px] font-semibold'>{courseInfo.name}</h2>
      <h2 className='text-gray-500 text-[14px] mb-3'>{courseInfo.author}</h2>
       {/* Video player */}
      <VideoPlayer 
      videoUrl={courseInfo?.chapter[activeChapterIndex]?.video?.url}
      poster={!watchMode? courseInfo?.banner?.url:null}
      
      
      />

      {/* description */}
      <h2 className='mt-5 text-[17px]  font-semibold'>
        {watchMode?
          <span className='flex justify-between items-center'>{courseInfo?.chapter[activeChapterIndex]?.name}

          <Button onClick={()=>setChapterCompleted(courseInfo?.chapter[activeChapterIndex]?.id)}>Mark Completed</Button>
          </span>
          : <span> Description du cours  </span>
        }

        </h2> 

        {watchMode ?
          <Markdown className='text-[14px] font-light mt-2 leading-6'>
          {courseInfo?.chapter[activeChapterIndex]?.shortDesc}
        </Markdown>
       : <Markdown className='text-[14px] font-light mt-2 leading-6'>
          {courseInfo.description}
        </Markdown>}
    
    </div>
  );
}

export default CourseVideoDescription;
