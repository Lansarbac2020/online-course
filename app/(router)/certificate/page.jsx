'use client'
import React, { useState, useEffect, useRef } from 'react';
import { useUser } from '@clerk/nextjs';
import GlobalApi from '@/app/_utils/GlobalApi';
import { Download, Award, BookOpen } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// Composant Certificate avec ref
const Certificate = React.forwardRef(({ courseTitle, user, credentialNumber }, ref) => {
  return (
    <div ref={ref} className="bg-white p-8 rounded-lg border text-center">
      <div className="mb-6">
        <Award className="h-16 w-16 mx-auto text-blue-600" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Certificate of Completion</h1>
      <p className="text-xl mb-2">This certifies that</p>
      <p className="text-2xl font-bold text-blue-600 mb-4">{user?.fullName || 'Student Name'}</p>
      <p className="text-xl mb-2">has successfully completed</p>
      <p className="text-2xl font-bold text-gray-800 mb-4">{courseTitle}</p>
      <p className="text-sm text-gray-600">Certificate ID: {credentialNumber}</p>
      <p className="text-sm text-gray-600">Date: {new Date().toLocaleDateString()}</p>
    </div>
  );
});

Certificate.displayName = 'Certificate';

function Home() {
  const { user } = useUser();
  const [userEnrolledCourses, setUserEnrolledCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const certificateRef = useRef(null);

  const getCompletedCourses = (courses) => {
    return courses.filter(course => {
      if (!course?.courseList?.chapter || !course.completedCahpter) {
        return false;
      }
      const totalChapters = course.courseList.chapter.length;
      const completedChapterIds = new Set(course.completedCahpter.map(chapter => chapter.chapterId));
      const allChaptersCompleted = course.courseList.chapter.every(chapter => 
        completedChapterIds.has(chapter._id || chapter.id)
      );
      return totalChapters > 0 && allChaptersCompleted;
    });
  };

  useEffect(() => {
    const fetchCompletedCourses = async () => {
      setLoading(true);
      try {
        if (user) {
          const result = await GlobalApi.getUserAllEnrolledCourseList(user.emailAddresses);
          const completedCourses = getCompletedCourses(result.userEnrollCourses);
          setUserEnrolledCourses(completedCourses);
        }
      } catch (error) {
        console.error("Error fetching completed courses:", error);
        setError("Failed to load courses. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCompletedCourses();
  }, [user]);

  const handleCourseClick = (course) => {
    setSelectedCourse(course === selectedCourse ? null : course);
  };

  const downloadCertificateAsPDF = async (courseName) => {
    if (!certificateRef.current) return;

    try {
      // Afficher un indicateur de chargement
      const button = event.target;
      const originalText = button.innerText;
      button.innerText = 'Generating PDF...';
      button.disabled = true;

      // Convertir le certificat en canvas
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2, // Meilleure qualité
        logging: false,
        useCORS: true,
        backgroundColor: '#ffffff'
      });

      // Créer le PDF
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, imgWidth, imgHeight);
      
      // Télécharger le PDF
      pdf.save(`${courseName.replace(/\s+/g, '_')}_Certificate.pdf`);

      // Restaurer le bouton
      button.innerText = originalText;
      button.disabled = false;
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-screen">
        <p className="text-gray-600">Loading your certificates...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-screen">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8 mt-1 md:mt-10 bg-gradient-to-r from-blue-50 to-primary p-6 rounded-lg shadow">
        <div className="text-center ">
          <h1 className="text-3xl font-bold text-primary flex items-center justify-center gap-2">
            <Award className="h-8 w-8 text-primary" />
            My Certificates
          </h1>
        </div>
      </div>

      {userEnrolledCourses.length === 0 ? (
        <div className="p-8 text-center bg-white rounded-lg shadow">
          <BookOpen className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <p className="text-lg text-gray-600">No completed courses found...</p>
          <p className="text-sm text-gray-500 mt-2">Complete a course to earn your certificate!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userEnrolledCourses.map((course, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg shadow transition-all duration-200 hover:shadow-lg ${
                selectedCourse === course ? 'ring-2 ring-primary' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {course.courseList.name}
                  </h2>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full ml-2">
                    Completed
                  </span>
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Certificate ID: {course.courseId}
                  </p>
                  <div className="flex flex-col gap-3">
                    <button 
                      onClick={() => handleCourseClick(course)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    >
                      {selectedCourse === course ? 'Hide Certificate' : 'View Certificate'}
                    </button>
                    {selectedCourse === course && (
                      <button 
                        onClick={() => downloadCertificateAsPDF(course.courseList.name)}
                        className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-900 transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download Certificate
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedCourse && (
        <div className="mt-8">
          <div className="bg-white rounded-lg shadow p-6">
            <Certificate
              ref={certificateRef}
              courseTitle={selectedCourse.courseList.name}
              user={user}
              credentialNumber={selectedCourse.courseId}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;