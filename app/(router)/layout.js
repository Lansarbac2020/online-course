import React from 'react'
import SideNav from './_components/SideNav'
import Header from './_components/Header'
import Footer from './_components/Footer'
import Link from 'next/link'


function layout({children}) {
  return (
    <div>
        <div className='md:w-64
        md:block  fixed'>
            <SideNav/>
          
        </div>
        <div className='md:ml-64'>
            <Header/>
        {children}
        </div>
       
        
         {/* <Footer/>        */}
</div>

  )
}

export default layout