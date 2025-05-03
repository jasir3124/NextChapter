import React from "react";
import { NavLink } from "react-router-dom";
import headerLogo from "../assets/logos/headerlogo.png";

const Header = () => {
  return (
    <header className="bg-darkBrown text-white px-6 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <NavLink to="/" className="text-3xl w-40px font-bold text-primary">
        <img src={headerLogo} alt="NextChapter - TBU" className="w-16 h-16" />
      </NavLink>

      {/* Navigation */}
      <nav className="flex-1 flex justify-center">
        <ul className="flex gap-6 text-xl font-bold">
          {[
            { name: "Home", to: "/" },
            { name: "Quiz", to: "/quiz" },
            { name: "Universities", to: "/universities" },
            { name: "Campuses", to: "/campus" },
            { name: "About", to: "/about" },
          ].map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 transition-colors duration-300"
                    : "hover:text-primary transition-colors duration-300"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Spacer to balance flex gap */}
      <div className="w-16 h-16" />
    </header>
  );
};

export default Header;
