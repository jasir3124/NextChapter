// import React from 'react';
// import { Link } from 'react-router-dom';
// import universityList from '../../assets/data/universityList.json';
//
// const UniversityCards = () => {
//   return (
//     <div className="container mx-auto py-10 px-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {universityList.map((university) => (
//           <Link
//             to={`/universities/${university.id}`}
//             key={university.id}
//             className="bg-yellow-100 rounded-xl shadow-lg p-6 border-amber-700 border-2 flex flex-col items-center cursor-pointer transition-transform duration-300 hover:scale-105"
//           >
//             <img
//               src={require(`../../assets/UniLogos/${university.filename}`)}
//               alt={`${university.name} logo`}
//               className="w-24 h-24 object-contain mb-4 scale-125"
//             />
//             <h2 className="text-xl font-semibold text-gray-800 text-center">
//               {university.name}
//             </h2>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };
//
// export default UniversityCards;


import React from 'react';
import { Link } from 'react-router-dom';
import universityList from '../../assets/data/universityList.json';

const UniversityCards = () => {
    return (
        <div className="min-h-screen py-16 px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {universityList.map((university) => (
                    <Link
                        to={`/universities/${university.id}`}
                        key={university.id}
                        className="bg-white rounded-2xl shadow-lg p-6 border-2 border-[#F8B703] hover:border-[#412E33] transition-all duration-300 transform hover:scale-105"
                    >
                        <div className="flex flex-col items-center">
                            <img
                                src={require(`../../assets/UniLogos/${university.filename}`)}
                                alt={`${university.name} logo`}
                                className="w-28 h-28 object-contain mb-4"
                            />
                            <h2 className="text-lg font-semibold text-[#222222] text-center">
                                {university.name}
                            </h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default UniversityCards;
