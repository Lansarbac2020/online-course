"use client"
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import { BellDot, Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Header() {

  const {user, isLoaded} = useUser();
  return (
    // <div className='p-4 float-right mt-8 bg-white flex justify-between'>
    //     {/* Search Bar*/}
    //      <div className='flex gap-2 border p-2 rounded-md'>
    //         <Search className='h-5  w-5'/>
    //         <input type='text' placeholder='Search...' className='outline-none'/>
    //     </div> 
       {/* Get started and bell icon */}
     
//</div
  )
}

export default Header