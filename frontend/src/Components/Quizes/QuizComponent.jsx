// import React from 'react';
// import {Link} from "react-router-dom";
//
// const QuizComponent = ({ quizData }) => {
//     return (
//         <div className="bg-primary rounded-2xl p-6 flex flex-col justify-between min-h-[280px] shadow-2xl">
//             <div>
//                 <h2 className="text-2xl font-bold text-gray-800 mb-2">{quizData.name}</h2>
//                 <p className="text-gray-600">{quizData.description}</p>
//             </div>
//             <Link  to={`/quiz/${quizData.id}`} className=" bg-white text-primary font-semibold py-2 px-4 rounded-lg self-start hover:bg-gray-100 transition">
//                 Take Quiz
//             </Link>
//         </div>
//     );
// };
//
// export default QuizComponent;


import React from 'react';
import { Link } from 'react-router-dom';

const QuizComponent = ({ quizData }) => {
    return (
        <div className="bg-gray-50 border border-primary/20 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 flex flex-col justify-between min-h-[280px]">
            {/* Quiz Title & Description */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-darkBrown mb-2">
                    {quizData.name}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                    {quizData.description}
                </p>
            </div>

            {/* CTA Button */}
            <Link
                to={`/quiz/${quizData.id}`}
                className="inline-block bg-primary text-white text-sm font-semibold py-2 px-5 rounded-full hover:bg-yellow-600 transition"
            >
                Take Quiz →
            </Link>
        </div>
    );
};

export default QuizComponent;
