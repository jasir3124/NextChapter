import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-darkBrown text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        
        {/* Branding (Left Aligned) */}
        <div className="flex justify-start">
          <div>
            <h2 className="text-2xl font-bold text-yellow-300">NextChapter</h2>
            <p className="mt-2 text-gray-300">
              Helping students make smarter university choices, one quiz at a time. 
              Discover the perfect university that matches your ambitions, interests, and goals. 
              Our platform empowers you to explore your academic potential through personalized quizzes, 
              making your decision process easier and more insightful. Join thousands of students who 
              are finding their ideal learning environment today.
            </p>
          </div>
        </div>

        {/* Navigation (Centered) */}
        <div className="flex justify-center">
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
              <li><Link to="/quiz" className="hover:text-yellow-300">Quiz</Link></li>
              <li><Link to="/universities" className="hover:text-yellow-300">Universities</Link></li>
              <li><Link to="/campus" className="hover:text-yellow-300">Campuses</Link></li>
              <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
            </ul>
          </div>
        </div>

        {/* Legal & Contact (Right Aligned) */}
        <div className="flex justify-end">
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p>Email: support@nextchapter.com</p>
            <p className="mt-4 text-gray-400">© 2025 NextChapter. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
