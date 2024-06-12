import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function WelcomeBanner() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-xl p-8 shadow-lg">
      <div className="flex-shrink-0">
        <Image 
          src="/bannerschool.png" 
          alt="Banner image" 
          width={150} 
          height={150} 
          className="rounded-full border-4 border-primary hover:scale-105 transform transition duration-300"
        />
      </div>
      <div className="mt-5 md:mt-0 md:ml-8 text-center md:text-left">
        <h2 className="font-bold text-3xl md:text-4xl text-black">
          Welcome to <span className="text-primary">LansarCenter-Academy</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mt-2">
          Explore, learn, and create your own real-world projects
        </p>
        <p className="text-gray-400 text-base md:text-lg mt-2 italic">
          "Open the doors to your future with quality education"
        </p>
        <Link href='/courses' className="mt-4 text-center">
          <button className="px-4 py-2 text-center bg-primary text-white rounded-lg shadow hover:bg-primary-dark transition duration-300">
            Learn More
          </button>
        </Link>
        <div className="mt-4 flex justify-center md:justify-start space-x-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
            #Education
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            #Innovation
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
            #Success
          </span>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;
