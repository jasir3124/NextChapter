import React from "react";
import { Link } from "react-router-dom"; // Or your preferred router

const LastChapter = () => {
    return (
        <section className="bg-[#F8B703]/10 text-white py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl font-bold mb-6 text-darkBrown">Ready to Discover Your Path?</h2>
                <p className="text-lg text-darkGray mb-8">
                    Your future starts with one click. Take the quiz and let us guide you to the university program that fits your dreams.
                </p>
                <Link
                    to="/quiz"
                    className="bg-[#F8B703] hover:bg-[#e0a602] text-[#222222] font-bold py-3 px-6 rounded-full text-xl transition duration-300"
                >
                    Take the Quiz
                </Link>
            </div>
        </section>
    );
};

export default LastChapter;
