
"use client"
import React, { useState } from 'react'


import { toast } from 'sonner';
import Link from 'next/link';
import { Instagram, LinkedinIcon, Loader2, MailIcon, YoutubeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
function page() {
    const[loading, setLoading]=useState(false);
    async function handleSubmit(event) {

        
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "ade659e2-264b-4003-b7ce-0d4995aaebc2");
        

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        setLoading(true);
        const response = await fetch("https://api.web3forms.com/submit", {
            
            method: "POST",
            // mode: "cors",
            // cache: "no-cache",
            // credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
          
        });
     
        const result = await response.json();
        if (result.success) {
            setLoading(false)
            //console.log(result);
            toast('Email Sent successfully !');
            event.target.reset();
            
        }
    }



return (
    <div className="mt-[90px] lg:translate-x-[-200px] mx-auto bg-white dark:bg-[#11001f] p-7 border border-gray-300 rounded-lg  lg:max-w-[700px] shadow-lg">
            
        <h2 className="text-2xl font-bold mb-6 text-center">Contact-Us</h2>
                <div className='  gap-5'>
                    <h2 className='float-left'>Veuillez remplir les champs ci-dessous pour nous contacter </h2>
                    <div className='lg:flex  lg:translate-x-[100px] gap-2'>
                    <Link href='mailto:lansarbacoro@gmail.com' className='text-gray-500 dark:text-white hover:text-primary hover:scale-105'><MailIcon/></Link>
                    <Link href='#'
                    className='text-gray-500  dark:text-white hover:text-primary hover:scale-105'
                    ><LinkedinIcon/></Link>
                    <Link href='#'
                    className='text-gray-500 dark:text-white hover:text-primary hover:scale-105'
                    ><YoutubeIcon/></Link>
                    </div>
                        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700  dark:text-white/80">
                    Nom
                </label>
                <input
                    type="text"
                    //id="name"
                    name="name"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  dark:bg-[#282829] "
                    required
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white/80">
                    Email
                </label>
                <input
                    type="email"
                    //id="email"
                    name="email"
                   
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-[#282829]"
                    required
                />
            </div>
           
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white/80">
                    Message
                </label>
                <textarea
                    //id="message"
                    name="message"
                    //value={formData.message}
                   // onChange={handleChange}
                    rows="4"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:focus:border-slate-400 sm:text-sm  dark:bg-[#282829]"
                    required
                ></textarea>
            </div>
           
            <div>
               <Button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:transition-shadow  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-[#2a004a] hover:scale-105"
                > {loading? <Loader2 className='animate-spin'/> : 'Submit' }
                </Button>
            </div>
        </form>
    </div>
);
}

export default page