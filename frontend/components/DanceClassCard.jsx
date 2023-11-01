import React from 'react';



const DanceClassCard = ({ level, classOne, classTwo, description }) => {
  return (
    <div className="dance-card bg-white rounded-lg p-4 my-4 shadow-md">
      <h2 className="text-xl font-semibold">{level}</h2>
      <p><strong>Class 1:</strong> {classOne}</p>
      <p><strong>Class 2:</strong> {classTwo}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default DanceClassCard;
