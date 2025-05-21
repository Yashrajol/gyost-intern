import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">G-Yost</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Courses <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 hidden group-hover:block transition-all duration-200 opacity-0 group-hover:opacity-100">
                <a href="#webdev" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Web Development</a>
                <a href="#prompt" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Prompt Engineering</a>
                <a href="#programming" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Programming</a>
              </div>
            </div>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About Us</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Login
            </Link>
            <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium transition-colors">
              Register
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Home</a>
            <a href="#webdev" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md pl-6">- Web Development</a>
            <a href="#prompt" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md pl-6">- Prompt Engineering</a>
            <a href="#programming" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md pl-6">- Programming</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">About Us</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md">Contact</a>
            <div className="flex space-x-2 pt-2">
              <Link to="/login" className="w-1/2 text-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-md transition-colors">
                Login
              </Link>
              <Link to="/login" className="w-1/2 text-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md transition-colors">
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;