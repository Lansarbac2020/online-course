"use client"
import React from 'react';
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold mr-4">Mon Site</h2>
          <p className="text-sm">© {new Date().getFullYear()} Tous droits réservés</p>
        </div>
        <div className="flex mt-4 md:mt-0">
          <a href="#" className="mr-4"><AiFillFacebook className="text-white hover:text-blue-500 transition-colors duration-300" /></a>
          <a href="#" className="mr-4"><AiOutlineTwitter className="text-white hover:text-blue-500 transition-colors duration-300" /></a>
          <a href="#" className="mr-4"><AiFillInstagram className="text-white hover:text-blue-500 transition-colors duration-300" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
