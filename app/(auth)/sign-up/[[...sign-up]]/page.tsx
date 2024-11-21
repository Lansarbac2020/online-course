import { SignIn, SignUp } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";




export default function Page() {
  return (
    <div className="flex mt-[90px] items-center justify-center h-screen">
      <SignUp/>
    </div>
  );
}
