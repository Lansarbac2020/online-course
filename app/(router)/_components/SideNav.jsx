"use client"
import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { BadgeCheck, BookOpen, GraduationCap, LayoutDashboardIcon, MailIcon, StoreIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

function SideNav() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar visibility
  const { user } = useUser();
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
      id: 4,
      name: 'Soyez Enseignant',
      icon: GraduationCap,
      path: '/beinstructor',
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
    console.log('path', path);
  }, [path]);

  return (
    <div>
      <nav className="w-full bg-white shadow-md text-primary fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <Image src={'/mylogo.jpg'} width={50} height={50} alt='logo'/>
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
          <div className={`md:flex md:items-center md:space-x-4 ${sidebarOpen ? 'block' : 'hidden'}`}>
            <ul className="md:flex md:space-x-4">
              {menu.map(
                (item) =>
                  item.auth && (
                    <Link href={item.path} key={item.id}>
                      <li
                        className={`py-2 px-4 border rounded-md transition-all ease-in-out duration-200 cursor-pointer hover:animate-bounce hover:text-white ${path === item.path ? 'bg-primary text-white' : 'bg-blue-300'}`}
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
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SideNav;
