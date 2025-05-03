import React from 'react';
import QuizComponent from "../Components/Quizes/QuizComponent";
import generalQuizData from "../assets/data/general.json";
import personalQuizData from "../assets/data/personality.json";
import financialQuizData from "../assets/data/financial.json";
import Header from "../Components/Header";

const Quiz = () => {
    return (
        <div>
            <Header />  
            <h2 className="text-5xl font-bold text-darkBrown text-center mt-12 mb-16">
                Available Quizes
            </h2>
            <div className="grid grid-cols-3 flex-wrap justify-center gap-8 mx-auto px-4">
                <QuizComponent quizData={generalQuizData} />
                <QuizComponent quizData={personalQuizData} />
                <QuizComponent quizData={financialQuizData} />
            </div>
        </div>
    );
};

export default Quiz;
