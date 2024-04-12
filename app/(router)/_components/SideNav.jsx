'use client'
import { useUser } from '@clerk/nextjs'
import { BadgeCheck, BookOpen, GraduationCap, LayoutDashboardIcon, MailIcon, StoreIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
 
function SideNav() {
  const {user} = useUser();
    const menu=
    [
      {
        id:8,
        name:'Dashboard',
        icon: LayoutDashboardIcon,
        path: '/dashboard',
        auth: user
    },
    {
        id:1,
        name:'Tous les cours',
        icon: BookOpen,
        path: '/courses',
        auth: true
    },
    {
        id:2,
        name: "Store",
        icon: StoreIcon,
        path: '/store',
        auth: true

    },
    {
      id:3,
      name: "Membres",
      icon: BadgeCheck,
      path: '/membership',
      auth: true
    },
    {
        id:3,
        name: "Soyez Enseignant",
        icon: GraduationCap,
        path: '/beinstructor',
        auth: true
    },
    {
        id:4,
        name: "Newsletter",
        icon: MailIcon,
        path: '/newsletter',
        auth: true

    }
]
const path = usePathname();
useEffect(()=>{
     console.log("path", path)
},[])

  return (
    <div className='p-5 bg-white shadow-sm border h-screen'>
       <Link href='/#'> <Image src="/mylogo.jpg" alt='logo'
        width={100} height={60}/></Link>
        <hr className='mt-7'></hr>
        {/* { Menu List} */}
        <div className='mt-5'>
          {menu.map((item, index)=>item.auth&&(
            <Link href={item.path}>
            <div className={`group flex gap-3 mt-2 p-3 text-[18px] text-gray-500 items-center cursor-pointer
            hover:bg-primary
            hover:text-white
            rounded-md
            transition-all ease-in-out duration-200
            ${path.includes(item.path)&& 'bg-primary text-white'}
            `}>
                <item.icon className='group-hover:animate-bounce'/>
                <h2>{item.name}</h2>
            </div>
            </Link>
            
          ))}  
        </div>
    </div>
  )
}

export default SideNav