"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactUs from "./ContactUs";

//TODO #1 - Add Profile Icon
//TODO #2 - Add Logo
//TODO #3 - Dropdown Menus 
//TODO #4 - Active NavLink
//TODO Transition About Dropdown Menu Timer

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleClassMenu, setToggleClassMenu] = useState(false);

  return (
    
    <div className={`bg-[#FFFFF0] text-black font-semibold h-28 flex items-center justify-between px-8 m-0 p-0 sticky top-0 z-50`}>
      {/* Logo / Dance Studio Title */}
      <div className="text-2xl"><Link href="/">Priyada Arts</Link></div>

      {/* NavLinks */}
      <div className="flex space-x-8 items-center">
        
        {/* <nav className="text-2xl">
          <Link href="/classes">Classes</Link>
        </nav> */}

        
        {/* Class Schedule / Registration Drop Down Menu */}
        <nav onMouseEnter={() => setToggleClassMenu(true)} onClick={() => setToggleClassMenu(!setToggleClassMenu)} className="text-2xl flex gap-2 cursor-pointer">
        <span>Classes</span>
        {
            toggleClassMenu && (
              <div 
                onMouseLeave={() => setToggleClassMenu(false)}
                className="absolute z-10 top-16 mt-2 w-[180px]  rounded-md shadow-lg "
              >
                <div className="px-6  py-4 rounded-md bg-teal-950 flex flex-col gap-2">
                  <Link href="/schedule" className=" hover:text-orange-500">Schedule</Link>
                  <Link href="/registration" className="hover:text-orange-500">Registration</Link>
                </div>
              </div>
            )
          }
        </nav>

        <nav className="text-2xl">
          <Link href="/media-gallery">Awards / Gallery</Link>
        </nav>

        <nav className="text-2xl">
          <Link href="/services">Services</Link>
        </nav>

        {/* Login / Sign Up */}
        <nav onMouseEnter={() => setToggleMenu(true)} onClick={() => setToggleMenu(!toggleMenu)} className="text-2xl flex gap-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span>Login / Sign Up</span>
          
          {/* Login / Sign Up Drop Down Menu */}
          {
            toggleMenu && (
              <div 
                onMouseLeave={() => setToggleMenu(false)}
                className="absolute z-10 top-16 mt-2 w-[180px]  rounded-md shadow-lg "
              >
                <div className="px-6  py-4 rounded-md bg-teal-950 flex flex-col gap-2">
                  <Link href="/signup" className=" hover:text-orange-500">Sign Up</Link>
                  <Link href="/login" className="hover:text-orange-500">Login</Link>
                </div>
              </div>
            )
          }

          {/* State Management if Logged In  */}

        </nav>
      </div>



    </div>
  );
};

export default NavBar;
