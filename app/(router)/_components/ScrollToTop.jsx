"use client"
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
        const [isVisisble, setIsVisible]=useState(false);
    
    
        useEffect(()=>{
      const toggleVisibilty=()=>{
        if(window.scrollY >300){
             setIsVisible(true);
        }else{
            setIsVisible(false)
        }
      };
      window.addEventListener('scroll',toggleVisibilty);
       return()=>{
        window.removeEventListener('scroll',toggleVisibilty);
       }
    
        },[]);
        const scrollToTop=()=>{
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
  return (
    <div className='fixed bottom-4 animate-pulse right-4'>
         {isVisisble &&<Button onClick={scrollToTop} className='bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none'>
        <ArrowUp/>
        </Button>} 
    </div>
  )
}

export default ScrollToTop