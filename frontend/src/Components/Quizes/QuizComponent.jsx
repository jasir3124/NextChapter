import React from 'react';

const QuizComponent = ({ quizData }) => {
    return (
        <div className=" mt-10 w-1/3 bg-primary rounded-2xl p-6 flex flex-col justify-between min-h-[280px] shadow-2xl">
            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{quizData.name}</h2>
                <p className="text-gray-600">{quizData.description}</p>
            </div>
            <button className=" bg-white text-primary font-semibold py-2 px-4 rounded-lg self-start hover:bg-gray-100 transition">
                Take Quiz
            </button>
        </div>
    );
};

export default QuizComponent;
