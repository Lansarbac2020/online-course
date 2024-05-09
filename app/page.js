"use client"
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

export default function Home() {
  const router = useRouter();
   const {user, isLoaded} = useUser();
   const [isDarkMode, setIsDarkMode] = useState(false);

   const toggleTheme=()=>{
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

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
<button aria-label="Toggle Dark Mode" className="toggle-button"onClick={toggleTheme}
>
  {isDarkMode ? (
    <MoonIcon className="icon" size={20}/>
  ):(
    <SunIcon className="icon" size={20}/>
  )
}

</button>
</div>
   </main>

 
  );
}
