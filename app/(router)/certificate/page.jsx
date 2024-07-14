"use client"
import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import GlobalApi from '@/app/_utils/GlobalApi';
import Certificate from '../../../components/Certificates';
import { Button } from '@/components/ui/button';

function Home() {
  const { user } = useUser();
  const [userEnrolledCourses, setUserEnrolledCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const fetchCompletedCourses = async () => {
      try {
        if (user) {
          const result = await GlobalApi.getUserAllEnrolledCourseList(user.emailAddresses);
          console.log("Fetched courses:", result.userEnrollCourses); // Log the fetched courses for debugging

          // Filter completed courses where all chapters are completed
          const completedCourses = result.userEnrollCourses.filter(course => {
            const totalChapters = course?.courseList?.chapter?.length || 0;
            const completedChapters = course.completedCahpter?.length || 0;
            return completedChapters === totalChapters && completedChapters > 0;
          });

          console.log("Completed courses:", completedCourses); // Log filtered completed courses
          setUserEnrolledCourses(completedCourses);
        }
      } catch (error) {
        console.error("Error fetching completed courses:", error);
      }
    };

    fetchCompletedCourses();
  }, [user]);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="mt-[100px] min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className='text-2xl font-bold mb-4'>My Certificates</h2>
      {userEnrolledCourses.length === 0 && <p>No completed courses found...</p>}
      <div className="flex flex-wrap justify-center gap-4">
        {userEnrolledCourses.length > 0 && userEnrolledCourses.map((course, index) => (
          <Button 
            key={index} 
            className="p-4 shadow-md border rounded-md"
            onClick={() => handleCourseClick(course)}
          >
            {course.courseList.name}
          </Button>
        ))}
      </div>
      {selectedCourse && (
        <Certificate
          courseTitle={selectedCourse.courseList.name}
          user={user}
          credentialNumber={selectedCourse.courseId}
        />
      )}
    </div>
  );
}

export default Home;
