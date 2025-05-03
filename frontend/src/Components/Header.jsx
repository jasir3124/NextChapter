    import React from "react";
    import { Link } from "react-router-dom";
    import headerLogo from "../assets/logos/headerlogo.png"

    const Header = () => {
    return (
        <header className="bg-darkBrown text-white px-6 py-4 flex items-center justify-between shadow-md">
        {/* Logo or Brand Name */}
        <Link to="/" className="text-3xl w-40px font-bold text-primary">
            <img src={headerLogo} alt="NextChapter - TBU" className="w-16 h-16" />
        </Link>

        {/* Navigation */}
        <nav>
            <ul className="flex gap-6 text-lg">
            <li>
                <Link to="/" className="hover:text-primary transition-colors duration-200">
                Home
                </Link>
            </li>
            <li>
                <Link to="/quiz" className="hover:text-primary transition-colors duration-200">
                Quiz
                </Link>
            </li>
            <li>
                <Link to="/universities" className="hover:text-primary transition-colors duration-200">
                Universities
                </Link>
            </li>
            <li>
                <Link to="/about" className="hover:text-primary transition-colors duration-200">
                About
                </Link>
            </li>
            </ul>
        </nav>
        </header>
    );
    };

    export default Header;
