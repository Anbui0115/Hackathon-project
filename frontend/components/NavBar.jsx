"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactUs from "./ContactUs";
import { UserGlobalState } from "@/context/UserContext";

//TODO #1 - Add Profile Icon
//TODO #2 - Add Logo
//TODO #3 - Dropdown Menus 
//TODO #4 - Active NavLink
//TODO Transition About Dropdown Menu Timer

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleClassMenu, setToggleClassMenu] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  const { sessionUser, setSessionUser} = UserGlobalState()

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    setSessionUser(null);

    alert("You have successfully logged out!");
  }


  return (
    
    <div className={`bg-black text-cream font-semibold h-28 flex items-center justify-between px-8 m-0 p-0 sticky top-0 z-50`}>
      {/* Logo / Dance Studio Title */}
      <div className="text-2xl"><Link href="/">Priyada Arts</Link></div>

      {/* NavLinks */}
      <div className="flex space-x-8 items-center">
        
        
        {/* Class Schedule / Registration Drop Down Menu */}
        <nav onMouseEnter={() => setToggleClassMenu(true)} onClick={() => setToggleClassMenu(!setToggleClassMenu)} className="text-2xl flex gap-2 cursor-pointer">
        <span className="text-xl">Classes</span>
        {
            toggleClassMenu && (
              <div 
                onMouseLeave={() => setToggleClassMenu(false)}
                className="absolute z-10 top-16 mt-2 w-[180px] rounded-md shadow-lg "
              >
                <div className="px-6 text-white py-4 rounded-md bg-teal-950 flex flex-col gap-2">
                  <Link href="/schedule" className="text-xl hover:text-orange-500">Schedule</Link>
                  <Link href="/registration" className="text-xl hover:text-orange-500">Registration</Link>
                </div>
              </div>
            )
          }
        </nav>

        <nav className="text-xl">
          <Link href="/media-gallery">Awards / Gallery</Link>
        </nav>

        <nav className="text-xl">
          <Link href="/services">Services</Link>
        </nav>

        {/* Login / Sign up or Profile if Logged In */}
        {
          (sessionUser) 
          ? 
          (
            <nav onMouseEnter={() => setToggleProfile(true)} onClick={() => setToggleProfile(!toggleProfile)} className="text-2xl flex gap-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span className="text-xl">{sessionUser.first_name} {sessionUser.last_name}</span>

              {
                toggleProfile && (
                  <div 
                    onMouseLeave={() => setToggleProfile(false)}
                    className="absolute z-10 top-16 mt-2 w-[180px]  rounded-md shadow-lg "
                  >
                    <div className="px-6  py-4 rounded-md bg-teal-950 flex flex-col gap-2 justify-start items-start">
                      <Link href="/your-account" className="text-xl text-white hover:text-orange-500">Account</Link>
                      <button onClick={handleLogout} className="text-xl text-white hover:text-orange-500">Logout</button>
                    </div>
                  </div>
                )
              }
            </nav>
            ) 
            : 
            (
          <nav onMouseEnter={() => setToggleMenu(true)} onClick={() => setToggleMenu(!toggleMenu)} className="text-2xl flex gap-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span className="text-xl">Login / Sign Up</span>
              {
                toggleMenu && 
                (
                  <div 
                    onMouseLeave={() => setToggleMenu(false)}
                    className="absolute z-10 top-16 mt-2 w-[180px]  rounded-md shadow-lg "
                  >
                    <div className="px-6  py-4 rounded-md bg-teal-950 flex flex-col gap-2">
                      <Link href="/signup" className="text-xl text-white orange-hover">Sign Up</Link>
                      <Link href="/login" className=" text-xl text-white orange-hover">Login</Link>
                    </div>
                  </div>
                )
              }
            </nav>
            )
        }
      </div>
    </div>
  );
};

export default NavBar;
