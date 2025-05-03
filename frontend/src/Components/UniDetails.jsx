// src/components/UniversityDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import universityList from '../assets/data/universityList.json';

const UniversityDetail = () => {
  const { id } = useParams();
  const university = universityList.find((u) => u.id === parseInt(id));

  if (!university) return <div className="text-center py-10">University not found.</div>;

  return (
    <div className="max-w-full mx-auto ">
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
        <img
          src={require(`../assets/UniLogos/${university.filename}`)}
          alt={university.name}
          className="w-32 h-32 object-contain mb-4"
        />
        <h1 className="text-2xl font-bold text-center mb-2">{university.name}</h1>
        <p className="text-gray-600 text-center mb-4">{university.description}</p>

        <ul className="text-gray-700 w-full space-y-2 text-sm">
          <li><strong>Founded:</strong> {university.founded}</li>
          <li><strong>Address:</strong> {university.address}</li>
          <li><strong>Phone:</strong> {university.phone || 'N/A'}</li>
          <li><strong>Email:</strong> <a href={`mailto:${university.email}`} className="text-blue-600 underline">{university.email}</a></li>
          <li><strong>Website:</strong> <a href={university.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{university.website}</a></li>
        </ul>
      </div>
    </div>
  );
};

export default UniversityDetail;
