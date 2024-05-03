"use client"
import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import WelcomebannerNewsletter from './_components/WelComeBannerNewsletter'
import SocialNetworks from './_components/SocialNetworks'

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

  const handleJoinNow = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const fullName = event.target.elements.fullName.value;

    // // Vérifiez si l'email existe déjà dans la base de données
    // const usersRef = ref(database, 'subscribers');
    // const query = equalTo(usersRef, 'email', email);
    // const snapshot = await get(query);
    // if (snapshot.exists()) {
    //   setAlertMessage('Cet email existe déjà.');
    //   return;
    // }

    // Enregistrez les données dans Firebase
    push(ref(database, 'subscribers'), {
      email,
      fullName
    });

    // Effacez les champs du formulaire après l'envoi
    event.target.elements.email.value = '';
    event.target.elements.fullName.value = '';

    setAlertMessage('Inscription réussie ! Merci de vous être inscrit à la newsletter.');
  };

  return (
    <div className="flex flex-col items-center justify-center py-[150px] mx-auto max-w-screen sm:px-6 lg:px-8 min-h-screen"> 
 
<WelcomebannerNewsletter/>

      <div className="mx-auto max-w-lg">

      
        {alertMessage && (
          <div className="alert">{alertMessage}</div>
        )}
        <form onSubmit={handleJoinNow} className="mb-0 bg-white mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
          <p className="text-center text-lg font-medium">Ajoutez vos e-mails pour vous abonner</p>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete='off'
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
              required
            />
          </div>
          <div>
            <label htmlFor="fullName" className="sr-only">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              autoComplete='off'
              className="w-full 
              
              rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter Full Name"
              required
            />
          </div>
          <button
            type="submit"
            className="block w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white"
          >
            Join Now
          </button>
        </form>
        <div className=' px-[180px] mt-7'><SocialNetworks/></div>
       
      </div>
    </div>
  );
}
export default Newsletter;

