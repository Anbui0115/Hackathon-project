"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

//TODO #1 - Add Profile Icon
//TODO #2 - Add Logo
//TODO #3 - Dropdown Menus 
//TODO #4 - Active NavLink

const NavBar = () => {
  return (
    
    <div className="bg-orange-100 h-28 flex items-center justify-between px-8 ">
      {/* Logo / Dance Studio Title */}
      <div className="text-xl font-bold">Priyada Arts Dance Studio</div>

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
          {/* Duplicate Link. Ensure you update this */}
        </nav>
        <nav className="text-lg font-semibold">
          <Link href="/about">About</Link>
        </nav>
        <nav className="text-lg font-semibold">
          <Link href="/contact">Contact Us</Link>{" "}
        </nav>
        <nav className="text-lg font-semibold flex gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <Link href="/contact">Login / Sign Up</Link>{" "}
          {/* Add Profile Icon */}
          
        </nav>
      </div>

    </div>
  );
};

export default NavBar;
