"use client"
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

export default function Home() {
  const router = useRouter();
   const {user, isLoaded} = useUser();


  useEffect(()=>{
 if(user)
 {
  router.push('/dashboard')
 } 

 else{
  isLoaded&&router.push('/courses')
 }

  },[user])
  return (
 
        <main className="container"> 
        <div className="content">
    <UserButton afterSignOutUrl="/sign-in" />

</div>
   </main>

 
  );
}
