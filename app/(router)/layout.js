"use client "
import React from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'
import Footer from './_components/Footer'
import Link from 'next/link'
import OurTeam from './courses/_components/OurTeam'
import Partener from './courses/_components/Partener'
import ScrollToTop from '../(router)/_components/ScrollToTop'


function layout({children}) {
  return (
    <div>
        <div className='md:w-64
        md:block  relative'>
            <SideNav/>
          
        </div>
        <div className='md:m-16'>
            {/* <Header/> */}
        {children}
        
        </div>
        
       <Footer/>
        <ScrollToTop/>
        
         {/* <Footer/>        */}
</div>

  )
}

export default layout