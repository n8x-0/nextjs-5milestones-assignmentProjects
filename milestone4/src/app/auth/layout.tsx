"use client"

import "../globals.css";
import { useState } from "react";

export default function RootLayout({
  children,
  login,
  signup
}: Readonly<{
  children: React.ReactNode;
  login: React.ReactNode;
  signup: React.ReactNode;
}>) {
  
  const [swich, setSwitch] = useState<boolean>(false);
  
  const handleSwitch = () => {
      if(swich){
        setSwitch(false);
        return;
      }
      setSwitch(true);
  }

  return (
    <html lang="en">
      <body className="text-white">
        {children}
        <header className="fixed top-0 flex md:hidden justify-between items-center w-full p-6">
          <div className="font-light text-4xl tracking-tighter text-black">n8x</div>
          <div className="underline text-blue-500 font-semibold" onClick={handleSwitch}>
            {swich ? "sign Up" : "Login"}
          </div>
        </header>
        <div className="w-full h-screen flex justify-center items-center">
          <div className="absolute p-4 bg-blue-500 rounded-full font-semibold text-sm md:block hidden">
            OR
          </div>
          <div className="xl:w-[80%] w-full h-full flex">
            <div className={`md:w-1/2 w-full md:block ${swich ? "" : "hidden"}`}>
              {login}
            </div>
            <div className={`md:w-1/2 w-full md:block ${swich ? "hidden" : ""}`}>
              {signup}  
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}