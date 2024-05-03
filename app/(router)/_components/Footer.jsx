// footer.jsx
import React from 'react';
//import FooterList from './_components/FooterList';
import FooterList from './FooterList'
import Link from 'next/link';
import { FacebookIcon, Instagram, LinkedinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
function Footer() {
  return (
    <footer className=" text-white bg-primary text-sm mt-16 ">
      <div className=" max-w-[1920px]
    mx-auto
    x1:px-20
    md:px-2
    flex
    flex-col 
    md:flex-row
    justify-between
    px-4 pt-16 pb-8">
        {/* Footer content goes here */}
        <FooterList className='p-5'>
                    <h3 className="text-base font-bold mb-2">Nos Partenaires</h3>
                    <Link href="https://google.com" className="hover:text-slate-500 transition-shadow flex gap-2"> <Image src="/chercher.png" width={30} height={30} alt="logo" /> <h3>Google</h3></Link>
                    <Link href="https://google.com" className="hover:text-slate-500 transition-shadow flex gap-2"> <Image src="/orangemali.png" width={30} height={30} alt="logo" /> <h3>Orange-Mali</h3></Link>
                    <Link href="https://google.com" className="hover:text-slate-500 transition-shadow flex gap-2"> <Image src="/gov-of-mali.png" width={30} height={30} alt="logo" /> <h3>Gouvernement du Mali</h3></Link>
                    <Link href="?category=Watch" className="hover:text-slate-500 transition-shadow">Watches</Link>
                </FooterList>
                <FooterList>
                    <h3 className="text-base font-bold 
                    mb-2">Customer Services </h3>
                    <Link href="/contact" className="hover:text-white transition-shadow">Contact-Us</Link>
                    <Link href="/shipping" className="hover:text-white transition-shadow">Shipping Policy</Link>
                    <Link href="#" className="hover:text-white transition-shadow">Returns & Exchanges</Link>
                    <Link href="#" className="hover:text-white transition-shadow">FAQs</Link>
                
                </FooterList> 
                <div className="w-full md:w-1/3 mb-6
                md:mb-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387218.5247643652!2d-122.41941555021886!3d37.77492958737761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858062b45d26a5%3A0xa6f81ad88cd1cb6b!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1648827197402!5m2!1sen!2sin" width="500" height="300" className="border-0" loading="lazy"  ></iframe>
                    <p>&copy; {new Date().getFullYear()}LansarCenter-Academy. All rights reserved</p>
                </div>
                <FooterList>
                <h3 className="text-base font-bold 
                    mb-2">Follows Us </h3>
                    <div className="flex gap-3">
                    <Link href="https://www.facebook.com/profile.php?id=100064973313047">
                        <FacebookIcon size={24}/>
                    </Link>
                   
                    <Link href="https://www.instagram.com/21_lansar?igsh=MXZxczZuNGNramx5NQ==">
                        <Instagram size={24}/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/lansarbacoroceolansarcenter/">
                        < LinkedinIcon size={24}/>
                    </Link>
                    
                    </div>
                    <Link  className='p-4'href="/newsletter">
                      <Button>Newsletter</Button>
                    </Link>
                </FooterList>
      </div>
    </footer>
  );
}

export default Footer;
