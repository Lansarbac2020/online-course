import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import CourseItem from './CourseItem';
import Link from 'next/link';

function CourseList() {
  const [courses, setCourseList] = useState([]);

  useEffect(() => {
    getAllCourses();
  }, []);

  // Fetch Course List
  const getAllCourses = () => {
    GlobalApi.getAllCourseList().then((resp) => {
      console.log(resp);
      setCourseList(resp?.courses);
    });
  };

  return (
    <div className='p-5 bg-white rounded-lg mt-3'>
      {/* Title and Filter */}
      <div className='flex flex-col lg:flex-row items-center justify-between'>
        <h2 className='text-[20px] font-bold text-primary mb-4 lg:mb-0 lg:mr-4'>
          All Courses
        </h2>
        <Select>
          <SelectTrigger className='w-full lg:w-[180px]'>
            <SelectValue placeholder='Filter' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='light'>All</SelectItem>
            <SelectItem value='dark'>Paid</SelectItem>
            <SelectItem value='system'>Free</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Display Course List */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
        {courses?.length > 0 ? (
          courses.map((item, index) => (
            <Link href={'/course-preview/' + item.slug} key={index}>
              <div>
                <CourseItem course={item} />
              </div>
            </Link>
          ))
        ) : (
          [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <div
              key={index}
              className='w-full h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse'
            ></div>
          ))
        )}
      </div>
    </div>
  );
}

export default CourseList;
