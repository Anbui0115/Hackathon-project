"use client";
import React from 'react';

const ServiceCard = () => {
  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-4xl font-extrabold text-lightcream my-8">Artistic Beyond Dance</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center">
          <div className="rounded-full bg-gray-200 mr-4">
            <img src="/Services/Makeup/Makeup-Main.jpg" alt="Makeup" className="w-full h-80 object-cover rounded-full" />
          </div>
          <div className="text-left text-lightcream">
            <h2 className="text-2xl font-semibold mb-2">Makeup</h2>
            <p className="text-sm">Indulge in the art of makeup! From Arengetrams to workshops and photoshoots, Priyanka specializes in dance & theatre makeup.</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="rounded-full bg-gray-200 mr-4">
            <img src="/dance_school/ABOUT US MAIN TEACHER PIC.jpg" alt="Nattuvangam" className="w-full h-80 object-cover rounded-full" />
          </div>
          <div className="text-left text-lightcream">
            <h2 className="text-2xl font-semibold mb-2">Nattuvangam</h2>
            <p className="text-sm">Experience the rhythmic magic! Priyanka offers nattuvangam services for live performances and audio recordings.</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="rounded-full bg-gray-200 mr-4">
            <img src="/Services/Hosting/Hosting.jpg" alt="Emcee/Hosting" className="w-full h-80 object-cover rounded-full" />
          </div>
          <div className="text-left text-lightcream">
            <h2 className="text-2xl font-semibold mb-2">Emcee/Hosting</h2>
            <p className="text-sm">Priyanka engages and captivates! She provides hosting and emceeing for various shows and events.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
