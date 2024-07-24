"use client";
import React, { useEffect, useState } from 'react';
import FooterList from './FooterList';
import Link from 'next/link';
import { FacebookIcon, Instagram, LinkedinIcon, MoonIcon, SunIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (theme === 'dark' || (!theme && prefersDarkMode)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };

  return { isDarkMode, toggleTheme };
};

function Footer() {
  const { isDarkMode, toggleTheme } = useDarkMode();

  return (
    <footer className="text-white bg-primary dark:bg-[#11001f] text-sm mt-16">
      <div className="max-w-[1920px] mx-auto px-4 pt-16 pb-8 flex flex-col md:flex-row justify-between">
        {/* Footer content goes here */}
        <FooterList className="p-5">
          <h3 className="text-base font-bold mb-2">Nos Partenaires</h3>
          <Link href="https://google.com" className="hover:text-slate-500 transition-shadow flex gap-2">
            <Image src="/chercher.png" width={30} height={30} alt="Google logo" />
            <h3>Google</h3>
          </Link>
          <Link href="https://google.com" className="hover:text-slate-500 transition-shadow flex gap-2">
            <Image src="/orangemali.png" width={30} height={30} alt="Orange-Mali logo" />
            <h3>Orange-Mali</h3>
          </Link>
          <Link href="https://google.com" className="hover:text-slate-500 transition-shadow flex gap-2">
            <Image src="/gov-of-mali.png" width={30} height={30} alt="Gouvernement du Mali logo" />
            <h3>Gouvernement du Mali</h3>
          </Link>
        </FooterList>
        <FooterList className="p-5">
          <h3 className="text-base font-bold mb-2">Customer Services</h3>
          <Link href="/contact" className="hover:text-slate-500 transition-shadow">Nous contacter</Link>
          <Link href="/beinstructor" className="hover:text-slate-500 transition-shadow">Devenir Enseignant</Link>
          <Link href="/testimonial" className="hover:text-slate-500 transition-shadow">Temoignages</Link>
          <Link href="/faqs" className="hover:text-slate-500 transition-shadow">FAQs</Link>
        </FooterList>
        <FooterList className="p-5">
          <h3 className="text-base font-bold mb-2">Follows Us</h3>
          <div className="flex gap-3">
            <Link href="https://www.facebook.com/profile.php?id=100064973313047">
              <div className='bg-white text-primary hover:text-rose-500 rounded-sm'>
                <FacebookIcon size={24} />
              </div>
            </Link>
            <Link href="https://www.instagram.com/21_lansar?igsh=MXZxczZuNGNramx5NQ==">
              <div className='bg-white text-primary hover:text-red-500 rounded-sm'>
                <Instagram size={24} />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/lansarbacoroceolansarcenter/">
              <div className='bg-white text-primary hover:text-red-500 rounded-sm'>
                <LinkedinIcon size={25} />
              </div>
            </Link>
            <button className="toggle-button" onClick={toggleTheme}>
              {isDarkMode ? (
                <SunIcon className="icon" size={20} />
              ) : (
                <MoonIcon className="icon" size={20} />
              )}
            </button>
          </div>
        </FooterList>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387218.5247643652!2d-122.41941555021886!3d37.77492958737761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858062b45d26a5%3A0xa6f81ad88cd1cb6b!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1648827197402!5m2!1sen!2sin" 
            width="100%" 
            height="200" 
            className="border-0" 
            loading="lazy" 
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className='mt-4'>&copy; {new Date().getFullYear()} LansarCenter-Academy. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
