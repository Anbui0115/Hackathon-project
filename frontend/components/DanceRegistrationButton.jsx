// DanceRegistrationButton.jsx
import React, { useState } from 'react';
import Link from 'next/link';

function DanceRegistrationButton({ onButtonClick }) {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '300px'
    };

    const buttonStyle = {
        backgroundColor: '#fef3c7',
        color: 'black',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        maxWidth: '300px',
        textAlign: 'center',
        fontSize: '30px',
        fontFamily: 'work sans',
        fontWeight: 'bold'
    };
    return (
        <div style={containerStyle}>
        <button onClick={onButtonClick} style={buttonStyle}>
            <Link href="/registration">Register a Class</Link>
        </button>
        </div>
    );
}

export default DanceRegistrationButton;
