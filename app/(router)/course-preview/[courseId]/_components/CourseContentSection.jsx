import { Lock, Play } from 'lucide-react'
import React, { useState } from 'react'

function CourseContentSection({courseInfo,isUserAlreadyEnrolled, watchMode=false,setActiveChapterIndex, completedCahpter}) {
     const [activeIndex, setActiveIndex,] = useState(0);

const checkisChapterCompleted=(chapterId)=>{
      return completedCahpter.find(item=>item.chapterId==chapterId)
}

  return (
    <div className='p-3 bg-white  dark:bg-[#11001f] rounded-sm'>
        <h2>Contenus</h2>
        {courseInfo.chapter.map((item,index)=>(
            <div>
                <h2 className={`p-2 text-[14px] flex justify-between items-center
                m-2 hover:bg-gray-200 
                hover:text-gray-500
                border rounded-sm px-4 cursor-pointer
                ${activeIndex==index && 'bg-primary dark:bg-[#2a004a] text-white'}
                ${isUserAlreadyEnrolled&& 'hover:bg-primary dark:hover:bg-[#2a004a] hover:text-white'}

                ${watchMode&&checkisChapterCompleted(item.id)
                && 'border-green-800 bg-green-400'}

                `}

                onClick={()=>{watchMode&&setActiveChapterIndex(index);
               watchMode&&setActiveIndex(index)}}
                >
                    {index+1}. {item.name}
                    {activeIndex==index||isUserAlreadyEnrolled?<Play className='h-4 w-4'/> :
                    <Lock className='h-4 w-4'/>}
                </h2>
            </div>
        ))}
        
    </div>
  )
}

export default CourseContentSection