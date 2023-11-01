import React from 'react';

const DanceClassCard = ({ level, classOne, classTwo, description, imageUrl }) => {
  const renderLevel = (level) => {
    if (level === 'Beginner' || level === 'Intermediate' || level === 'Advanced') {
      return <h2 className="text-xl font-semibold text-black">{level}</h2>;
    } else {
      return <h2 className="text-xl font-semibold text-black">Senior</h2>;
    }
  };

  return (
    <div className="flex flex-row flex-wrap w-25%">
      <div className="bg-white rounded-lg p-4 my-4 shadow-md text-black w-80 h-80 mr-5 ml-5 p-5">
        {imageUrl && <img src={imageUrl} alt={`Image for ${level}`} className="rounded-md mb-2 w-full h-32 object-cover" />}
        <div className="mb-3">
          {renderLevel(level)}
          <p className="text-sm mt-1"><strong>Class 1:</strong> {classOne}</p>
          <p className="text-sm"><strong>Class 2:</strong> {classTwo}</p>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default DanceClassCard;
