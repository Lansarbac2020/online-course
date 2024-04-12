import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
  return (
    <div className='flex gap-5 items-center bg-white rounded-xl p-5'>
        <Image src='/bannerschool.png' alt='Bannerimage' width={100} height={100}/>
        <div>
            <h2 className='font-bold text-[27px]'>
                Bienvenue dans <span className='text-primary'>Lansar-Center</span> Academy
            </h2>
            <h2 className='text-gray-500'> Explorez, apprenez et creer vos propres  projets réels </h2> 
        </div>
    </div>
  )
}

export default WelcomeBanner