import React, {useEffect, useMemo, useState} from 'react';
import {useParams} from 'react-router-dom';
import {arrayUnion, doc, setDoc} from 'firebase/firestore';
import {db} from '../../firebase'; // adjust path to your firebase.js
import img1 from '../../assets/QuizPhotos/art1.jpg';
import img2 from '../../assets/QuizPhotos/business1.jpg';
import img3 from '../../assets/QuizPhotos/tech2.jpg';
import img4 from '../../assets/QuizPhotos/tech1.jpg';
import img5 from '../../assets/QuizPhotos/science1.jpg';
import img6 from '../../assets/QuizPhotos/literacy1.jpg';

import generalQuizData from '../../assets/data/general.json';
import personalQuizData from '../../assets/data/personality.json';
import financialQuizData from '../../assets/data/financial.json';

const quizzes = {
    'financial-fit': financialQuizData,
    'personality-career-match': personalQuizData,
    'general-interest': generalQuizData,
};

const QuizQuestions = () => {
    const {id: quizId} = useParams();
    const quiz = quizzes[quizId];

    // ensure we have one sessionId per user
    const [sessionId, setSessionId] = useState(null);
    useEffect(() => {
        let stored = localStorage.getItem('quizSessionId');
        if (!stored) {
            stored = crypto.randomUUID();
            localStorage.setItem('quizSessionId', stored);
        }
        setSessionId(stored);
    }, []);

    const images = [img1, img2, img3, img4, img5, img6];
    const randomImage = useMemo(
        () => images[Math.floor(Math.random() * images.length)],
        []
    );

    // Store selected answers per question index
    const [selectedAnswers, setSelectedAnswers] = useState({});

    const handleAnswerClick = (questionIndex, answer) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionIndex]: answer.tag,
        }));
    };

    // Firestore write helper
    async function saveAnswer(sessionId, quizId, questionId, tag) {
        const ref = doc(db, 'quizResults', sessionId);

        // Ensure the document exists and initialize the quiz array if it doesn't exist
        await setDoc(
            ref,
            {
                [quizId]: arrayUnion({questionId, tag, timestamp: Date.now()})
            },
            {merge: true}
        );
    }


    // Called when user clicks Finish Quiz
    const handleFinish = async () => {
        if (!sessionId) return;
        console.log(selectedAnswers); // Logs tags per question

        try {
            // Loop through each answered question and save each tag
            for (const [qIndex, tag] of Object.entries(selectedAnswers)) {
                const questionId = quiz.questions[qIndex].id;
                await saveAnswer(sessionId, quizId, questionId, tag); // Save the tag
            }
            alert('Quiz results saved!');
        } catch (err) {
            console.error('Error saving quiz results:', err);
            alert('Failed to save results.');
        }
    };


    if (!quiz) {
        return <div className="p-10 text-red-500 text-xl">Quiz not found</div>;
    }

    return (
        <div className="flex h-screen">
            <div className="w-2/5 h-full">
                <img src={randomImage} alt="Quiz visual" className="w-full h-full object-cover"/>
            </div>

            <div className="w-3/5 p-10 overflow-y-auto">
                <h1 className="text-3xl font-bold mb-2">{quiz.name}</h1>
                <p className="text-gray-700 mb-6">{quiz.description}</p>

                {quiz.questions.map((q, index) => (
                    <div key={q.id} className="mb-6">
                        <h3 className="text-4xl font-bold mb-10 mt-20">{q.question}</h3>
                        <ul className="mt-2 grid grid-cols-2 gap-4">
                            {q.answers.map((ans, i) => {
                                const isSelected = selectedAnswers[index] === ans.tag;
                                return (
                                    <li
                                        key={i}
                                        onClick={() => handleAnswerClick(index, ans)}
                                        className={`p-4 rounded-full text-center cursor-pointer transition-colors duration-200 ${
                                            isSelected
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-gray-100 hover:bg-gray-200 text-black'
                                        }`}
                                    >
                                        {ans.answer}
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="w-full h-0.5 mt-10 bg-black"></div>
                    </div>
                ))}

                <button
                    type="button"
                    onClick={handleFinish}
                    className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
                >
                    Finish Quiz
                </button>
            </div>
        </div>
    );
};

export default QuizQuestions;
