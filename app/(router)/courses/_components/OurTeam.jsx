import React from 'react'
import Image from 'next/image';
import { FacebookIcon, Instagram, Linkedin } from 'lucide-react';
import WelcomeBanner from './WelcomeBanner';
function OurTeam() {
  let message =`Lorem ipsum dolor, sit amet consectetur adipisicing elit \n Quidem eos quam doloribus amet, voluptas dolorem sequi pariatur quod quos iure, quasi a itaque fugit dolores nihil! Necessitatibus vitae accusamus ipsum.`
  return (
   <div className='p-5 bg-white rounded-lg mt-3'>
   <h1>Notre Equipe</h1> 
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sapiente, sequi ullam a corporis dignissimos aliquid fugit, molestias velit, nemo rerum ipsam amet deserunt aperiam adipisci ad facilis voluptatem? Corporis?</p>
   </div>
   
  )
}

export default OurTeam