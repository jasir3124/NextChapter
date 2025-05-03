import React from 'react';
import QuizComponent from "../Components/Quizes/QuizComponent";
import generalQuizData from "../assets/data/general.json";
import personalQuizData from "../assets/data/personality.json";
import financialQuizData from "../assets/data/financial.json";
import Header from "../Components/Header";

const Quiz = () => {
    return (
        <div>
            <Header/>
            <div className={"flex gap-20 mx-10"}>
                <QuizComponent quizData={generalQuizData}/>
                <QuizComponent quizData={personalQuizData}/>
                <QuizComponent quizData={financialQuizData}/>
            </div>
        </div>
    );
};

export default Quiz;
