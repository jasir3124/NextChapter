import React, {useEffect} from 'react';
import QuizComponent from "../Components/Quizes/QuizComponent";
import generalQuizData from "../assets/data/general.json";
import personalQuizData from "../assets/data/personality.json";
import financialQuizData from "../assets/data/financial.json";
import Header from "../Components/Header";

const Quiz = () => {
    function ensureSession() {
        let sessionId = localStorage.getItem('quizSessionId');
        if (!sessionId) {
            sessionId = crypto.randomUUID();
            localStorage.setItem('quizSessionId', sessionId);
        }
        return sessionId;
    }

// inside your component:
    useEffect(() => {
        const sessionId = ensureSession();
        console.log('Quiz session:', sessionId);
    }, []);

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
