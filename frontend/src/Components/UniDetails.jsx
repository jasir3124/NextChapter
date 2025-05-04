import React from 'react';
import { useParams } from 'react-router-dom';
import universityList from '../assets/data/universityList.json';
import Header from '../Components/Header';

const UniversityDetail = () => {
  const { id } = useParams();
  const university = universityList.find((u) => u.id === parseInt(id));
  
  if (!university) {
    return <div className="h-screen flex items-center justify-center text-xl">University not found.</div>;
  }
  
  return (
    <>
    <Header />  
    <div className="w-screen h-screen bg-gray-200 overflow-auto">
      <div className="max-w-6xl mx-auto p-8 flex flex-col lg:flex-row gap-10">
        {/* Left - Logo */}
        <div className="flex-shrink-0 w-full lg:w-1/3 flex justify-center">
          <img
            src={require(`../assets/UniLogos/${university.filename}`)}
            alt={university.name}
            className="w-72 h-72 object-contain bg-white rounded-xl shadow-md p-4"
          />
        </div>

        {/* Right - Title & Description */}
        <div className="flex flex-col justify-center w-full lg:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{university.name}</h1>
          <p className="text-gray-700 mb-6">{university.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl shadow p-4">
              <p className="font-semibold">Founded</p>
              <p>{university.founded}</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <p className="font-semibold">Address</p>
              <p>{university.address}</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <p className="font-semibold">Phone</p>
              <p>{university.phone || 'N/A'}</p>
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <p className="font-semibold">Email</p>
              <a href={`mailto:${university.email}`} className="text-blue-600 underline">
                {university.email}
              </a>
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <p className="font-semibold">Website</p>
              <a
                href={university.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {university.website}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default UniversityDetail;
