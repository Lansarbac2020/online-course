"use client";
import { useState, useEffect } from 'react';

import { UserButton, useUser } from '@clerk/nextjs';
import { BadgeCheck, BookOpen, LayoutDashboardIcon, MailIcon, Search, StoreIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';



function SideNav() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar visibility
  const { user, isLoaded } = useUser();
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
      name: 'Home',
      icon: BookOpen,
      path: '/courses',
      auth: true,
    },
    {
      id: 2,
      name: 'Blog',
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

  useEffect(() => {
    setActiveMenu(path);
  }, [path]);

  return (
    <div>
      <nav className="w-full bg-primary shadow-md text-white fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="font-bold text-left">Lansar-Academy</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-primary rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={toggleSidebar} // Toggle sidebar visibility when clicking the hamburger icon
                  aria-expanded={sidebarOpen}
                  aria-controls="mobile-menu"
                >
                  {sidebarOpen ? (
                    <Image src="/close.svg" width={30} height={30} alt="Close menu" />
                  ) : (
                    <Image
                      src="/hamburger-menu.svg"
                      width={30}
                      height={30}
                      alt="Open menu"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Main Menu for Desktop */}
          <div className={clsx('hidden md:flex md:items-center md:space-x-2')}>
            <ul className="md:flex md:space-x-2">
              {menu.map(
                (item) =>
                  item.auth && (
                    <Link href={item.path} key={item.id}>
                      <li
                        className={clsx(
                          'py-1 px-4 transition-all ease-in-out duration-200 cursor-pointer hover:animate-bounce hover:text-slate-300',
                          path === item.path ? 'bg-primary border-b-2 text-white' : 'text-white'
                        )}
                        onClick={() => setActiveMenu(item.path)} // Set active menu item
                      >
                        {item.name}
                      </li>
                    </Link>
                  )
              )}
            </ul>
            <div className="flex items-center gap-4">
            
              <div className="flex h-[50px] bg-white gap-1 border p-2 rounded-md">
                <Search className="h-9 w-5 text-black" />
                <input type="text" placeholder="Search our 100+ courses" className="outline-none text-black"/>
                <div>
                  <button className="bg-primary p-3 rounded-md translate-x-3 mr-1 translate-y-[-7.5px]">
                    Search
                  </button>
                </div>
              </div>
              {isLoaded && user ? (
                <UserButton afterSignOutUrl="/courses"/>
              ) : (
                <Link href="/sign-in">
                  <div className="border p-2 rounded-md bg-blue-700">Get Started</div>
                </Link>
              )}
            </div>

            {/* Afficher les résultats de la recherche */}
      
    
          </div>
        </div>
      </nav>

      {/* Sidebar Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 w-64 bg-white h-full shadow-lg z-20 transform ${
          sidebarOpen ? 'translate-x-0 ' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col  bg-primary h-full p-4">
          <button className="self-end mb-4" onClick={toggleSidebar}>
            <Image src="/close.svg" width={30} height={30} alt="Close menu" />
          </button>
          <ul className="flex flex-col bg-primary gap-2">
            {menu.map(
              (item) =>
                item.auth && (
                  <Link href={item.path} key={item.id}>
                    <li
                      className={`py-2 px-4 bg-primary transition-all ease-in-out duration-200 cursor-pointer hover:text-slate-400  ${
                        path === item.path ? 'bg-slate-100 text-black' : 'text-white'
                      }`}
                      onClick={() => {
                        setSidebarOpen(false);
                        setActiveMenu(item.path); // Set active menu item
                      }}
                    >
                      <item.icon className="inline-block mr-2" />
                      {item.name}
                    </li>
                  </Link>
                )
            )}
          </ul>
          <div className=" mt-9 grid gap-4">
             <div className="flex  max-w-[250px] bg-white gap-1 border p-2 rounded-md">
                <Search className="h-8 w-4 text-black" />
                <input type="text" placeholder="Search..." className="outline-none max-w-[95px] text-black" />
                <div>
                <button className="bg-primary text-white  max-w-[80px] p-3 rounded-md translate-x-3 mr-1">
                    Search
                  </button>
                </div>
              </div>
              {isLoaded && user ? (
               <div className='translate-x-[2px] border-2 p-2 
               rounded-md'> <UserButton afterSignOutUrl="/courses"/> <span className='text-teal-50 font-bold'>Account</span>
               </div>
              ) : (
                <Link href="/sign-in">
                  <div className=" translate-x-5 mt-7 border p-2 max-w-[180px]   text-center rounded-md bg-blue-700">Get Started</div>
                </Link>
              )}
            </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
