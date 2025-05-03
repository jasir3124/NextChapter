import React from 'react';
import { Link } from 'react-router-dom';
import universityList from '../../assets/data/universityList.json';

const UniversityCards = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {universityList.map((university) => (
          <Link
            to={`/universities/${university.id}`}
            key={university.id}
            className="bg-gray-100 rounded-xl shadow-lg p-6 border-gray-300 border-2 flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <img
              src={require(`../../assets/UniLogos/${university.filename}`)}
              alt={`${university.name} logo`}
              className="w-24 h-24 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              {university.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UniversityCards;
