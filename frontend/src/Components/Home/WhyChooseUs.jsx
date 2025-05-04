import React from "react";

const WhyChooseUs = () => {
    return (
        <section className="bg-[#F8B703] text-[#222222] py-20 px-6 pb-20">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-5xl font-bold text-center mb-12">Why Choose NextChapter?</h2>

                <div className="space-y-10 border-l-4 border-[#412E33] pl-6 relative">
                    {/* Step 1 */}
                    <div className="relative">
                        <div className="absolute -left-8 top-1 w-6 h-6 bg-[#412E33] rounded-full border-4 border-white"></div>
                        <h3 className="text-2xl font-semibold mb-2">🎯 Personalized Matches</h3>
                        <p className="text-[#412E33]/90">
                            No generic results — we suggest study programs based on your unique interests and personality.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative">
                        <div className="absolute -left-8 top-1 w-6 h-6 bg-[#412E33] rounded-full border-4 border-white"></div>
                        <h3 className="text-2xl font-semibold mb-2">🌐 Real University Options</h3>
                        <p className="text-[#412E33]/90">
                            Explore real universities in Albania and beyond. See programs, compare options, and dig deeper.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative">
                        <div className="absolute -left-8 top-1 w-6 h-6 bg-[#412E33] rounded-full border-4 border-white"></div>
                        <h3 className="text-2xl font-semibold mb-2">💡 Designed for You</h3>
                        <p className="text-[#412E33]/90">
                            We combine smart tech with friendly visuals — making your future fun to explore, not stressful.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
