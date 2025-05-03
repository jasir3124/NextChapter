import React from "react";

const QuizComponent = ({ quizData }) => {
  return (
    <div className="bg-yellow-200 rounded-2xl shadow-2xl shadow-yellow-600/40 p-8 flex flex-col justify-between min-h-[320px] w-32 sm:w-[480px] mt-6 mx-auto">
      <div>
        <h2 className="text-3xl font-semibold mb-4">{quizData.name}</h2>
        <p className="text-gray-800 text-lg mb-6">{quizData.description}</p>
      </div>
      <button className="bg-[#3B2F2F] text-white py-3 px-5 rounded-xl hover:bg-[#2c2424] transition text-lg self-start">
        Take Quiz
      </button>
    </div>
  );
};

export default QuizComponent;
