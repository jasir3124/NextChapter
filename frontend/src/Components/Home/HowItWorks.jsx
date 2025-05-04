import React from "react";

const HowItWorks = () => {
    return (
        <div className="w-full py-16 px-6 bg-[#F8B703]/10">
            <section className="py-16 px-6 text-center">
                <h2 className="text-5xl font-bold text-[#222222] mb-20">How It Works</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* Step 1 */}
                    <div className="bg-white border-t-4 border-[#F8B703] rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
                        <div className="text-4xl mb-4 text-[#F8B703]">📝</div>
                        <h3 className="text-2xl font-semibold text-[#412E33] mb-2">1. Take the Quiz</h3>
                        <p className="text-[#412E33]/80">Answer a few fun and thoughtful questions about your interests and goals.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white border-t-4 border-[#F8B703] rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
                        <div className="text-4xl mb-4 text-[#F8B703]">🧠</div>
                        <h3 className="text-2xl font-semibold text-[#412E33] mb-2">2. Get Matched</h3>
                        <p className="text-[#412E33]/80">We analyze your answers to find university programs that fit your personality.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white border-t-4 border-[#F8B703] rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
                        <div className="text-4xl mb-4 text-[#F8B703]">🌍</div>
                        <h3 className="text-2xl font-semibold text-[#412E33] mb-2">3. Explore & Decide</h3>
                        <p className="text-[#412E33]/80">Learn about the programs, campuses, and paths that fit your future.</p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default HowItWorks;
