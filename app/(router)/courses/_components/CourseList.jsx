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
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); // Track the selected filter

  useEffect(() => {
    getAllCourses();
  }, []);

  // Fetch Course List
  const getAllCourses = () => {
    GlobalApi.getAllCourseList()
      .then((resp) => {
        console.log(resp);
        setCourseList(resp?.courses || []); // Ensure courses are set correctly
      })
      .catch((error) => {
        console.error('Error fetching all courses:', error);
        setCourseList([]); // Set empty array in case of an error
      });
  };

  // Search Courses
  const searchCourses = (term) => {
    const sanitizedTerm = term.trim();
    if (sanitizedTerm === '') {
      getAllCourses();
      return;
    }

    GlobalApi.SEARCH_COURSES(sanitizedTerm)
      .then((resp) => {
        console.log(resp);
        setCourseList(resp?.courses || []);
      })
      .catch((error) => {
        console.error('Error searching for courses:', error);
        setCourseList([]);
      });
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    searchCourses(value); // Call search logic
  };

  // Handle filter change
  const handleFilterChange = (value) => {
    setFilter(value);

    // Apply filter logic
    if (value === 'all') {
      getAllCourses();
    } else {
      const isFree = value === 'free';
      const filteredCourses = courses.filter((course) => course.free === isFree);
      console.log("filteredCourses", filteredCourses)
      setCourseList(filteredCourses);
    }
  };

  return (
    <div className="p-5 bg-white dark:bg-[#11001f] rounded-lg mt-3">
      {/* Search and Filter Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mb-4">
        <h2 className="text-[20px] font-bold text-primary dark:text-white/90">All Courses</h2>
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search courses..."
            className="border rounded-lg p-2 w-full lg:w-[300px] dark:bg-gray-800 dark:text-white"
          />

          {/* Filter Dropdown */}
          <Select onValueChange={handleFilterChange}>
            <SelectTrigger className="w-full lg:w-[180px] dark:bg-gray-800">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="free">Free</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Course List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses?.length > 0 ? (
          courses.map((course, index) => (
            <Link href={`/course-preview/${course.slug}`} key={index}>
              <CourseItem course={course} />
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
            No courses found.
          </p>
        )}
      </div>
    </div>
  );
}

export default CourseList;
