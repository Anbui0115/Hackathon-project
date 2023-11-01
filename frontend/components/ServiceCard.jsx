"use client"
import React from 'react';

const ServiceCard = () => {
  return (
    <div className="container mx-auto p-6 flex justify-end items-center h-full bg-cover bg-center" style={{ backgroundImage: 'url("/splash_page/Splash page.jpg")' }}>
      <div className="flex flex-col items-start">
        <h1 className="text-4xl font-extrabold text-lightcream my-8">Artistic Beyond Dance</h1>

        <div className="flex flex-col gap-8">
          <div className="flex items-center">
            <div className="rounded-full overflow-hidden bg-gray-200 w-40 h-40 flex-shrink-0 mr-4">
              <img src="/Services/Makeup/Makeup-Main.jpg" alt="Makeup" className="w-full h-full object-cover" />
            </div>
            <div className="text-left text-lightcream">
              <h2 className="text-2xl font-semibold mb-2">Makeup</h2>
              <p className="text-sm">Indulge in the art of makeup! From Arangetrams to workshops and photoshoots, Priyanka specializes in dance & theatre makeup.</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="rounded-full overflow-hidden bg-gray-200 w-40 h-40 flex-shrink-0 mr-4">
              <img src="/dance_school/ABOUT US MAIN TEACHER PIC.jpg" alt="Nattuvangam" className="w-full h-full object-cover" />
            </div>
            <div className="text-left text-lightcream">
              <h2 className="text-2xl font-semibold mb-2">Nattuvangam</h2>
              <p className="text-sm">Experience the rhythmic magic! Priyanka offers Nattuvangam services for live performances and audio recordings.</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="rounded-full overflow-hidden bg-gray-200 w-40 h-40 flex-shrink-0 mr-4">
              <img src="/Services/Hosting/Hosting.jpg" alt="Emcee/Hosting" className="w-full h-full object-cover" />
            </div>
            <div className="text-left text-lightcream">
              <h2 className="text-2xl font-semibold mb-2">Emcee/Hosting</h2>
              <p className="text-sm">Priyanka engages and captivates! She provides hosting and emceeing for various shows and events.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
