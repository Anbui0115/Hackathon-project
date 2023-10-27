// DanceRegistrationButton.jsx
import React, { useState } from 'react';
import Link from 'next/link';

function DanceRegistrationButton({ onButtonClick }) {

    return (
        <div className='flex justify-center items-center max-h-72'>
        <button onClick={onButtonClick} className='bg-cream hover:bg-white text-black py-2 px-4 rounded-full cursor-pointer max-w-xs text-center text-3xl font-worksans font-bold'>
            <Link href="/registration">Register a Class</Link>
        </button>
        </div>
    );
}

export default DanceRegistrationButton;
