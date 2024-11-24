import Image from 'next/image';
import React, { useState } from 'react';

function CourseItem({ course }) {
  const [isImageLoaded, setIsImageLoaded] = useState(true); // Track image loading

  return (
    <div className="border rounded-md hover:shadow-md dark:border-white/30 hover:scale-105 transform transition duration-300 hover:shadow-blue-300 dark:hover:shadow-white cursor-pointer">
      <div className="relative rounded-t-md h-[130px]">
        {/* Placeholder while the image is loading */}
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-[rgb(5,7,20)] animate-pulse rounded-t-md" />
        )}

        {/* Actual Image */}
        <Image
          src={course?.banner?.url} // Fallback image if the URL is missing
          width={500}
          height={150}
          alt="banner"
          className={`rounded-t-md h-[130px] object-cover transition-opacity duration-300 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadingComplete={() => setIsImageLoaded(true)} // Trigger when image loads
        />
      </div>

      {/* Course Details */}
      <div className="flex flex-col gap-1 p-2">
        <h2 className="font-medium">{course?.name}</h2>
        <h2 className="text-[12px] text-gray-400">{course?.author}</h2>
        {course?.chapter?.length === 0 ? (
          <div className="flex gap-2">
            <Image src="/youtube.png" alt="youtube" width={20} height={20} />
            <h2 className="text-[14px] text-gray-400">Watch On Youtube</h2>
          </div>
        ) : (
          <div className="flex gap-2">
            <Image src="/chapitre.png" alt="chapter" width={20} height={20} />
            <h2 className="text-[14px] text-gray-400">{course?.chapter?.length} Chapitres</h2>
          </div>
        )}
        <h2 className="text-[15px]">{course?.free ? 'Free' : 'Paid'}</h2>
      </div>
    </div>
  );
}

export default CourseItem;
