import React from 'react';

const Quiz = ({ question = '', options = [] }) => {
    return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row transition-transform duration-300 hover:scale-[1.02]">
        
        {/* Left side: glowing tablet */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center p-6 relative">
          <div className="absolute top-4 left-4 text-white font-semibold text-lg">webz</div>
          <div className="w-64 h-80 border-4 border-[#fc00ff] rounded-xl glow relative z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#fc466b] via-[#3f5efb] to-[#fc00ff] opacity-10 rounded-xl blur-xl"></div>
          </div>
        </div>

        {/* Right side: question and answers */}
        <div className="w-full md:w-1/2 bg-[#f9f8fc] p-6 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">{question}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {options.map((opt, index) => (
              <button
                key={index}
                className="rounded-full border border-gray-300 text-gray-700 px-4 py-2 text-left hover:bg-purple-100 transition-all duration-200"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
