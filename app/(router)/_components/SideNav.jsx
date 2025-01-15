"use client";
import { useState, useEffect } from 'react';
import { SignOutButton, useUser } from '@clerk/nextjs';
import { BadgeCheck, BookCopy, BookOpen, LayoutDashboardIcon, Loader2, MailIcon, Search, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import SearchBar from './SearchBar';

function SideNav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, isLoaded } = useUser();
  const path = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

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
      icon: BookCopy,
      path: '/blog',
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

  const handleLinkClick = (url) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = url;
    }, 300);
  };

  return (
    <div className="relative">
      {/* Announcement Banner */}
      {isVisible && (
        <div className="fixed inset-x-0 bottom-0 z-50">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3">
            <div className="mx-auto max-w-7xl flex items-center justify-between">
              <p className="text-sm font-medium text-white">
                Available soon
                <Link href="/information-page" className="ml-2 inline-block underline hover:text-blue-100 transition-colors">
                  Under development!
                </Link>
              </p>
              <button
                onClick={() => setIsVisible(false)}
                className="rounded-lg bg-blue-500 p-1.5 text-white hover:bg-blue-400 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="fixed inset-x-0 top-0 z-40 bg-gradient-to-r from-primary to-primary-dark dark:from-[rgb(5,7,20)] dark:to-[rgb(15,17,30)] border-b border-white/10">
        <div className=" max-w-7xl  px-4 sm:px-6 lg:px-8 text-center justify-between">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src='/ikklogo.png'
                alt='Logo'
                width={90}
                height={25}
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <div className="flex space-x-4">
                {menu.map(item => item.auth && (
                  <Link
                    key={item.id}
                    href={item.path}
                    className={`flex items-center px-3 py-2 text-sm font-medium transition-colors
                      ${path === item.path 
                        ? 'border-b-2 border-white text-white' 
                        : 'text-gray-200 hover:text-white'
                      }`}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Search and Profile */}
              <div className="flex items-center space-x-4">
                {/* <SearchBar /> */}
                
                {isLoaded && user ? (
                  <Popover>
                    <PopoverTrigger>
                      <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-white/20 transition hover:ring-white/40">
                        <Image
                          src={user?.imageUrl}
                          fill
                          className="object-cover"
                          alt="Profile"
                        />
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-48 p-2">
                      <div className="flex flex-col space-y-1">
                        <Link 
                          href="/certificate"
                          className="rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                        >
                          My Certificates
                        </Link>
                        <div className="rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800">
                          <SignOutButton />
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                ) : (
                  <Link href="/sign-in">
                    <button
                      onClick={() => handleLinkClick('/sign-in')}
                      className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        'Get Started'
                      )}
                    </button>
                  </Link>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-primary-dark hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden"
            >
              <span className="sr-only">Open main menu</span>
              {sidebarOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}>
          <div className="space-y-1 px-4 pb-3 pt-2">
          {isLoaded && user ? (
                  <Popover>
                    <PopoverTrigger>
                      <div className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-white/20 transition hover:ring-white/40">
                        <Image
                          src={user?.imageUrl}
                          fill
                          className="object-cover"
                          alt="Profile"
                        />
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-48 p-2">
                      <div className="flex flex-col space-y-1">
                        <Link 
                          href="/certificate"
                          className="rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
                        >
                          My Certificates
                        </Link>
                        <div className="rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800">
                          <SignOutButton />
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                ) : (
                  <Link href="/sign-in">
                    <button
                      onClick={() => handleLinkClick('/sign-in')}
                      className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        'Get Started'
                      )}
                    </button>
                  </Link>
                )}
            {menu.map(item => item.auth && (
              <Link
                key={item.id}
                href={item.path}
                className={`flex items-center rounded-md px-3 py-2 text-base font-medium transition-colors
                  ${path === item.path
                    ? 'bg-primary-dark text-white'
                    : 'text-gray-200 hover:bg-primary-dark hover:text-white'
                  }`}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className="mr-2 h-5 w-5" />
                {item.name}
              </Link>
            ))}
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SideNav;