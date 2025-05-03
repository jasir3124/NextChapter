import React, { useMemo } from 'react';

import img1 from '../../assets/images/quiz/img1.png';
import img2 from '../../assets/images/quiz/img2.png';
import img3 from '../../assets/images/quiz/img3.png';

const QuizQuestions = () => {
    const images = [img1, img2, img3];

    // Random image memoized to stay consistent during this render
    const randomImage = useMemo(() => {
        const index = Math.floor(Math.random() * images.length);
        return images[index];
    }, []);

    return (
        <div className="w-full h-full">
            <img
                src={randomImage}
                alt="Quiz visual"
                className="w-full h-auto object-cover rounded-xl"
            />
        </div>
    );
};

export default QuizQuestions;
