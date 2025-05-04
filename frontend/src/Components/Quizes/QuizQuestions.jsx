// import React, {useEffect, useMemo, useState} from 'react';
// import {useParams, useNavigate } from 'react-router-dom';
// import {arrayUnion, doc, setDoc} from 'firebase/firestore';
// import {db} from '../../firebase'; // adjust path to your firebase.js
// import img1 from '../../assets/QuizPhotos/art1.jpg';
// import img2 from '../../assets/QuizPhotos/business1.jpg';
// import img3 from '../../assets/QuizPhotos/tech2.jpg';
// import img4 from '../../assets/QuizPhotos/tech1.jpg';
// import img5 from '../../assets/QuizPhotos/science1.jpg';
// import img6 from '../../assets/QuizPhotos/literacy1.jpg';
//
// import generalQuizData from '../../assets/data/general.json';
// import personalQuizData from '../../assets/data/personality.json';
// import financialQuizData from '../../assets/data/financial.json';
//
// const quizzes = {
//     'financial-fit': financialQuizData,
//     'personality-career-match': personalQuizData,
//     'general-interest': generalQuizData,
// };
//
// const QuizQuestions = () => {
//     const {id: quizId} = useParams();
//     const quiz = quizzes[quizId];
//     const navigate = useNavigate();
//
//     // ensure we have one sessionId per user
//     const [sessionId, setSessionId] = useState(null);
//     useEffect(() => {
//         let stored = localStorage.getItem('quizSessionId');
//         if (!stored) {
//             stored = crypto.randomUUID();
//             localStorage.setItem('quizSessionId', stored);
//         }
//         setSessionId(stored);
//     }, []);
//
//     const images = [img1, img2, img3, img4, img5, img6];
//     const randomImage = useMemo(
//         () => images[Math.floor(Math.random() * images.length)],
//         []
//     );
//
//     // Store selected answers per question index
//     const [selectedAnswers, setSelectedAnswers] = useState({});
//
//     const handleAnswerClick = (questionIndex, answer) => {
//         setSelectedAnswers((prev) => ({
//             ...prev,
//             [questionIndex]: answer.tag,
//         }));
//     };
//
//     // Firestore write helper
//     async function saveAnswer(sessionId, quizId, questionId, tag) {
//         const ref = doc(db, 'quizResults', sessionId);
//
//         // Ensure the document exists and initialize the quiz array if it doesn't exist
//         await setDoc(
//             ref,
//             {
//                 [quizId]: arrayUnion({questionId, tag, timestamp: Date.now()})
//             },
//             {merge: true}
//         );
//     }
//
//
//     const [FormError, setFormError] = useState()
//     // Called when user clicks Finish Quiz
//     const handleFinish = async () => {
//         if (!sessionId) return;
//
//         // Check if all questions are answered
//         const totalQuestions = quiz.questions.length;
//         const answeredQuestions = Object.keys(selectedAnswers).length;
//
//         if (answeredQuestions < totalQuestions) {
//             setFormError('Please answer all questions before finishing the quiz.');
//             return;
//         }
//
//         try {
//             // Save each answer to Firestore
//             for (const [qIndex, tag] of Object.entries(selectedAnswers)) {
//                 const questionId = quiz.questions[qIndex].id;
//                 await saveAnswer(sessionId, quizId, questionId, tag);
//             }
//
//             navigate('/result')
//         } catch (err) {
//             console.error('Error saving quiz results:', err);
//             alert('Failed to save results.');
//         }
//     };
//
//
//     if (!quiz || !quiz.questions || !Array.isArray(quiz.questions)) {
//         return <div className="p-10 text-red-500 text-xl">Quiz not found or invalid format</div>;
//     }
//
//
//     return (
//         <div className="flex h-screen">
//             <div className="w-2/5 h-full">
//                 <img src={randomImage} alt="Quiz visual" className="w-full h-full object-cover"/>
//             </div>
//
//             <div className="w-3/5 p-10 overflow-y-auto">
//                 <h1 className="text-3xl font-bold mb-2">{quiz.name}</h1>
//                 <p className="text-gray-700 mb-6">{quiz.description}</p>
//
//                 {quiz.questions.map((q, index) => (
//                     <div key={q.id} className="mb-6">
//                         <h3 className="text-4xl font-bold mb-10 mt-20">{q.question}</h3>
//                         <ul className="mt-2 grid grid-cols-2 gap-4">
//                             {q.options.map((ans, i) => {
//                                 const isSelected = selectedAnswers[index] === ans.tag;
//                                 return (
//                                     <li
//                                         key={i}
//                                         onClick={() => handleAnswerClick(index, ans)}
//                                         className={`p-4 rounded-full text-center cursor-pointer transition-colors duration-200 ${
//                                             isSelected
//                                                 ? 'bg-primary text-white'
//                                                 : 'bg-gray-100 hover:bg-gray-200 text-black'
//                                         }`}
//                                     >
//                                         {ans.answer}
//                                     </li>
//                                 );
//                             })}
//                         </ul>
//                         <div className="w-full h-0.5 mt-10 bg-black"></div>
//                     </div>
//                 ))}
//
//                 <div className={"flex items-center"}>
//                     <button
//                     type="button"
//                     onClick={handleFinish}
//                     className="mt-6 bg-white text-primary border border-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition"
//                 >
//                     Finish Quiz
//                 </button>
//
//                     {FormError && (
//                         <p className={"text-red-600 font-semibold text-xl mt-5 ms-10"}>{FormError}</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default QuizQuestions;


import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
    const { id: quizId } = useParams();
    const quiz = quizzes[quizId];
    const navigate = useNavigate();

    const images = [img1, img2, img3, img4, img5, img6];
    const randomImage = useMemo(
        () => images[Math.floor(Math.random() * images.length)],
        []
    );

    // Store selected answers per question index
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [formError, setFormError] = useState('');

    const handleAnswerClick = (questionIndex, answer) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionIndex]: answer.tag,
        }));
        setFormError(''); // clear error on any click
    };

    const handleFinish = () => {
        // 1) Validation: all questions answered?
        if (Object.keys(selectedAnswers).length < quiz.questions.length) {
            setFormError('Please answer all questions before finishing the quiz.');
            return;
        }

        // 2) Extract tags array
        const userTags = Object.values(selectedAnswers);

        // 3) Navigate to results, passing tags
        navigate('/results', { state: { userTags } });
    };

    if (!quiz || !Array.isArray(quiz.questions)) {
        return <div className="p-10 text-red-500 text-xl">Quiz not found or invalid format</div>;
    }

    return (
        <div className="flex h-screen">
            <div className="w-2/5 h-full">
                <img
                    src={randomImage}
                    alt="Quiz visual"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="w-3/5 p-10 overflow-y-auto">
                <h1 className="text-3xl font-bold mb-2">{quiz.name}</h1>
                <p className="text-gray-700 mb-6">{quiz.description}</p>

                {quiz.questions.map((q, index) => (
                    <div key={q.id} className="mb-6">
                        <h3 className="text-4xl font-bold mb-10 mt-20">{q.question}</h3>
                        <ul className="mt-2 grid grid-cols-2 gap-4">
                            {q.options.map((ans, i) => {
                                const isSelected = selectedAnswers[index] === ans.tag;
                                return (
                                    <li
                                        key={i}
                                        onClick={() => handleAnswerClick(index, ans)}
                                        className={`p-4 rounded-full text-center cursor-pointer transition-colors duration-200 ${
                                            isSelected
                                                ? 'bg-primary text-white'
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

                <div className="flex items-center">
                    <button
                        type="button"
                        onClick={handleFinish}
                        className="mt-6 bg-white text-primary border border-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition"
                    >
                        Finish Quiz
                    </button>
                    {formError && (
                        <p className="text-red-600 font-semibold text-xl mt-5 ms-10">
                            {formError}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuizQuestions;
