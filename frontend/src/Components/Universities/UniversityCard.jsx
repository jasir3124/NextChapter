import React, { useState } from 'react';
import universityList from '../../assets/data/universityList.json'

const UniversityCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (id) => {
    setSelectedCard(id === selectedCard ? null : id); // Toggle selection
  };

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {universityList.map((university) => (
          <div
            key={university.id}
            className={`bg-white rounded-xl shadow-lg p-6 flex flex-col items-center cursor-pointer transition-transform duration-300 ${
              selectedCard === university.id ? 'scale-105' : 'scale-100'
            }`}
            onClick={() => handleCardClick(university.id)}
          >
            <img
              src={university.filename}
              alt={`${university.name} logo`}
              className="w-24 h-24 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              {university.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversityCards;