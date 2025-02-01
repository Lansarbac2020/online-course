"use client"
import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import WelcomebannerNewsletter from './_components/WelComeBannerNewsletter'
import SocialNetworks from './_components/SocialNetworks'
import { LoaderCircle } from 'lucide-react';

const firebaseConfig = {
  apiKey: "AIzaSyAMlfahT-tPh0ciwPr8YJ2ydSlNexi1QZc",
  authDomain: "online-course-7a7b8.firebaseapp.com",
  projectId: "online-course-7a7b8",
  storageBucket: "online-course-7a7b8.appspot.com",
  messagingSenderId: "964128513382",
  appId: "1:964128513382:web:ee2fca1807ce1c04fc7ca7",
  measurementId: "G-VW602Q5TKK",
  databaseURL: "https://online-course-7a7b8-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function Newsletter() {
  const [alertMessage, setAlertMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const handleJoinNow = async (event) => {
    setLoading(true);
    event.preventDefault();
    const email = event.target.elements.email.value;
    const fullName = event.target.elements.fullName.value;

    // Enregistrez les données dans Firebase
    push(ref(database, 'subscribers'), {
      email,
      fullName
    });


    // Effacez les champs du formulaire après l'envoi
    event.target.elements.email.value = '';
    event.target.elements.fullName.value = '';

    setAlertMessage('Inscription réussie ! Merci de vous être inscrit à la newsletter.');
    setLoading(false)
  };


    
  
    useEffect(() => {
     
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      // Cleanup the timer on component unmount
      return () => clearTimeout(timer);
    }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <LoaderCircle className="animate-spin text-lg text-primary" />
        </div>
      ) : (
        <div className="mt-[100px] p-5">
          <div className="md:flex md:gap-5">
            <div className="md:w-2/3 lg:w-3/4">
              <WelcomebannerNewsletter />
            </div>
            <div className="mt-5 md:mt-0 md:w-1/3 lg:w-1/4">
              <form
                onSubmit={handleJoinNow}
                className="bg-white dark:bg-[#11001f] space-y-4 mr-3 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
              >
                <p className="text-center text-lg font-medium mr-3">
                  Ajoutez votre e-mails pour vous abonner
                </p>
                {alertMessage && (
                  <div className="alert text-center text-green-600">
                    {alertMessage}
                  </div>
                )}
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="off"
                    className="w-full rounded-lg bg-gray-200 dark:bg-[#282829] dark:border-white/45 p-4 text-sm shadow-sm"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="fullName" className="sr-only">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    autoComplete="off"
                    className="w-full rounded-lg bg-gray-200 dark:bg-[#282829] p-4 text-sm shadow-sm"
                    placeholder="Enter Full Name"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="block w-full rounded-lg bg-primary dark:bg-[#2a004a] dark:border dark:border-white/50 px-5 py-3 text-sm font-medium text-white hover:scale-105 hover:shadow-md"
                >
                  {loading ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    'Join Now'
                  )}
                </button>
              </form>
              <div className="mt-7 flex justify-center">
                <SocialNetworks />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Newsletter;
