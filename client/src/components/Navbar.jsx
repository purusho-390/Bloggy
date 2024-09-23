import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 flex items-center justify-between shadow-lg sticky top-0 z-50">
     
            <div className="flex items-center">
                <h1 className="text-3xl font-extrabold text-white tracking-wide">
                    Bloggy🖐️
                </h1>
            </div>

          
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-white focus:outline-none text-3xl">
                    {isOpen ? '✕' : '☰'}
                </button>
            </div>

            
            <div className={`transition-all duration-500 ease-in-out transform md:flex items-center w-full md:w-auto md:static absolute top-full left-0 md:shadow-none shadow-lg z-10 md:mt-0 mt-2 p-4 md:p-0 ${isOpen ? 'opacity-100' : 'opacity-0 md:opacity-100 md:transform-none -translate-y-8'}`}>
              
                <Link
                    to="/"
                    className={`block px-4 py-2 mx-2 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out transform hover:bg-white hover:text-blue-600 hover:scale-105 shadow-md
                    ${isActive('/') ? 'bg-white text-blue-600' : 'text-white'}
                    `}
                    onClick={() => setIsOpen(false)}
                >
                    Home
                </Link>
          
                <Link
                    to="/new"
                    className={`block px-4 py-2 mx-2 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out transform hover:bg-white hover:text-blue-600 hover:scale-105 shadow-md
                    ${isActive('/new') ? 'bg-white text-blue-600' : 'text-white'}
                    `}
                    onClick={() => setIsOpen(false)}
                >
                    New Post
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
