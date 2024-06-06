"use client"
import { useState, useEffect } from 'react';
import { UserButton, useUser } from '@clerk/nextjs';
import { BadgeCheck, BellDot, BookOpen, LayoutDashboardIcon, MailIcon, Search, StoreIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Button } from '@/components/ui/button';


function SideNav() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar visibility
  const {user, isLoaded} = useUser();
  const path = usePathname();
  const [activeMenu, setActiveMenu] = useState(null); // State to track active menu item

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const menu = [
    {
      id: 8,
      name: 'Dashboard',
      icon: LayoutDashboardIcon,
      path: '/dashboard',
      auth: user,
    },
    {
      id: 1,
      name: 'Tous les cours',
      icon: BookOpen,
      path: '/courses',
      auth: true,
    },
    {
      id: 2,
      name: 'Store',
      icon: StoreIcon,
      path: '/store',
      auth: true,
    },
    {
      id: 3,
      name: 'Membres',
      icon: BadgeCheck,
      path: '/membership',
      auth: true,
    },
    {
      id: 5,
      name: 'Newsletter',
      icon: MailIcon,
      path: '/newsletter',
      auth: true,
    },
  ];

  // useEffect(() => {
  //   console.log('path', path);
  // }, [path]);

  return (
    <div>
      <nav className="w-full bg-primary shadow-md text-white fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className='font-bold text-left'>Lansar-Academy</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-primary rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={toggleSidebar} // Toggle sidebar visibility when clicking the hamburger icon
                >
                  {sidebarOpen ? (
                    <Image src="/close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* Sidebar Menu */}
          <div className={`md:flex md:items-center md:space-x-2 ${sidebarOpen ? 'block' : 'hidden'}`}>
            <ul className="md:flex md:space-x-2">
              {menu.map(
                (item) =>
                  item.auth && (
                    <Link href={item.path} key={item.id}>
                      <li
                        className={`py-1 px-4 transition-all ease-in-out duration-200 cursor-pointer hover:animate-bounce hover:text-slate-300 ${path === item.path ? 'bg-primary border-b-2 text-white' : 'text-white'}`}
                        onClick={() => {
                          toggleSidebar();
                          setActiveMenu(item.path); // Set active menu item
                        }}
                      >
                        {item.name}
                      </li>
                    </Link>
                  )
              )}
            </ul>
            <div className='flex items-center gap-4'>
      {/* <BellDot className='text-gray-500'/> */}
     
        <div className='flex h-[50px]  bg-white gap-1 border p-2 rounded-md'>
            <Search className='h-9  w-5 text-black'/>
            <input type='text' placeholder='Search...' className='outline-none text-black'/>
            <div><button className='bg-primary p-3 rounded-md translate-x-3 mr-1 translate-y-[-7.5px]'>Search</button></div>
        </div> 
        {isLoaded&&user
      ? <UserButton afterSignOutUrl='/courses'/>
      :
      <Link href={'/sign-in'}>
        <div className='border p-2 rounded-md bg-blue-700'>Get Started</div></Link>}
        </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SideNav;