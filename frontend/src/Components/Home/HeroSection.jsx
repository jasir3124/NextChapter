import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationVid from '../../assets/Animation - 1746268939779.json';

const HeroSection = () => {
  return (
    <div className="bg-primary h-[calc(100vh-6rem)] p-10 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Text */}
        <div>
          <h1 className="text-white font-bold text-5xl md:text-7xl leading-tight mb-6">
            Your future starts here. <br /> Discover it.
          </h1>
          <p className="text-white text-xl md:text-2xl">
            <Link className="text-darkBrown font-bold" to="/quiz">
              Take a quick quiz
            </Link>{' '}
            and get matched with universities that fit your interests and style.
          </p>
        </div>

        {/* Right: Lottie Animation */}
        <div className="w-full flex justify-center">
          <Lottie
            animationData={animationVid}
            loop={true}
            style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
