import React from "react";

const TopQuizes = () => {
  return (
    <div className="w-full py-16 px-6">
      {/* Top Header */}
      <h2 className="text-6xl font-bold text-darkBrown text-center mb-16">
        Featured Quizes
      </h2>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((num) => (
          <div
            key={num}
            className="bg-yellow-200 rounded-2xl shadow-2xl shadow-yellow-600/40 p-10 flex flex-col justify-between min-h-[420px]"
          >
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                Quiz Title {num}
              </h2>
              <p className="text-gray-800 text-lg mb-6">
                {num === 1 &&
                  "Test your general knowledge with this engaging and fun quiz packed with surprising facts and challenging questions."}
                {num === 2 &&
                  "Dive into this history quiz that covers ancient events, famous leaders, and world-changing moments."}
                {num === 3 &&
                  "Boost your science IQ with questions covering biology, physics, chemistry, and more."}
              </p>
            </div>
            <button className="bg-[#3B2F2F] text-white py-3 px-5 rounded-xl hover:bg-[#2c2424] transition text-lg">
              Take Quiz
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopQuizes;
