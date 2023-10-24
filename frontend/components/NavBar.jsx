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
  const [toggleAbout, setToggleAbout] = useState(false);
  const [toggleModal, setToggleModal] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    
    <div className={`bg-orange-100 h-28 flex items-center justify-between px-8 m-0 p-0 sticky top-0 z-50`}>
      {/* Logo / Dance Studio Title */}
      <div className="text-xl font-bold"><Link href="/">Priyada Arts Dance Studio</Link></div>

      {/* NavLinks */}
      <div className="flex space-x-8 items-center">

        <nav className="text-lg font-semibold">
          <Link href="/media-gallery">Additional Services</Link>
        </nav>
        <nav className="text-lg font-semibold">
          <Link href="/media-gallery">Media Gallery</Link>
        </nav>
        <nav className="text-lg font-semibold">
          <Link href="/faq">FAQ</Link>{" "}
        </nav>

        {/* About Navbar Link */}
        <nav
          className="text-lg font-semibold relative"
          onMouseEnter={() => setToggleAbout(true)}
          onClick={() => setToggleAbout(!toggleAbout)}
        >
          <span className="cursor-pointer">About</span>

          {/* About Dropdown Menu */}
          {
            toggleAbout && (
              <div
                onMouseLeave={() => setToggleAbout(false)}
                className="absolute z-10 top-full  mt-2 w-[210px] rounded-md shadow-lg bg-white"
              >
                <div className="px-6 py-4 rounded-md bg-white flex flex-col gap-2">
                  <Link
                    href="/about/studio"
                    className="hover:text-orange-500"
                  >
                    About the Studio
                  </Link>

                  <Link
                    href="/about/artist"
                    className="hover:text-orange-500"
                  >
                    About the Artist
                  </Link>

                </div>
              </div>
            )
          }
        </nav>

        <nav className="text-lg font-semibold">
          <Link href="/media-gallery">Media Gallery</Link>
        </nav>
        
        <nav className="text-lg font-semibold">  
          <Link href="/faq">FAQs</Link>{" "}
          {/* Duplicate Link. Ensure you update this */}
        </nav>

        <nav className="text-lg font-semibold">
          <Link href="/services">Services</Link>
        </nav>

        {/* Contact Us */}
        <nav className="text-lg font-semibold" onClick={() => setToggleModal(!toggleModal)}>
          <span className="cursor-pointer">Contact Us</span>

          {/* Contact Us Modal */}
          {
            toggleModal && (
              <ContactUs toggleModal={toggleModal} setToggleModal={setToggleModal} />
            )
          }
        </nav>

        {/* Login / Sign Up */}
        <nav onMouseEnter={() => setToggleMenu(true)} onClick={() => setToggleMenu(!toggleMenu)} className="text-lg font-semibold flex gap-2 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span>Login / Sign Up</span>
          
          {/* Login / Sign Up Drop Down Menu */}
          {
            toggleMenu && (
              <div 
                onMouseLeave={() => setToggleMenu(false)}
                className="absolute z-10 top-16 mt-2 w-[180px] rounded-md shadow-lg bg-white"
              >
                <div className="px-6 py-4 rounded-md bg-white flex flex-col gap-2">
                  <Link href="/signup" className="hover:text-orange-500">Sign Up</Link>
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
