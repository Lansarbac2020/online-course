"use client"
import React, { useState, useEffect } from 'react';

import { useUser } from '@clerk/nextjs';
import GlobalApi from '@/app/_utils/GlobalApi';
import Certificate from '../../../components/Certificates';


function Home() {
  const { user } = useUser();
  const [userEnrolledCourses, setUserEnrolledCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        if (user) {
          const result = await GlobalApi.getUserAllEnrolledCourseList(user.emailAddresses);
          console.log(result);  // Debugging step: log the result
          setUserEnrolledCourses(result.userEnrollCourses);
        }
      } catch (error) {
        console.error("Error fetching enrolled courses:", error);
      }
    };

    fetchEnrolledCourses();
  }, [user]);

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-4">
      {userEnrolledCourses.length === 0 && <p>Loading or no courses found...</p>}
      <div className="flex flex-wrap justify-center gap-4">
        {userEnrolledCourses.map((course, index) => (
          <button 
            key={index} 
            className="p-4 bg-white shadow-md border rounded-md"
            onClick={() => handleCourseClick(course)}
          >
            {course.courseList.name}
          </button>
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
