import Image from 'next/image';
import React from 'react';

function WelcomeBannerDashboard({ user }) {
  return (
    <div className='bg-green-100 rounded-xl p-5 flex flex-col md:flex-row gap-5 items-center'>
      <div className="md:w-48">
        <Image src={'/bannerschool.png'} alt='panda' width={150} height={150} />
      </div>
      <div>
        <h2 className='text-sm md:text-lg font-light'>
          Welcome Back,
          <span className='font-bold text-primary'>{user?.fullName}</span>
        </h2>
        <h2 className='text-xs md:text-base font-light text-slate-500'>
          Let's Begin Learning where you left off, <br/>
          Keep it up and improve your progress
        </h2>
      </div>
    </div>
  );
}

export default WelcomeBannerDashboard;
