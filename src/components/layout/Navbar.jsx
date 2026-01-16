import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Added Link for internal routing
import { Sun, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 2. Updated hrefs to paths that match our App.jsx routes
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo Section - Now clickable to return Home */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Sun className="h-10 w-10 text-orange-500 fill-orange-500" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-blue-900 leading-none tracking-tight">ESTEEM</span>
                <span className="text-[10px] font-semibold text-orange-600 tracking-[0.2em] uppercase">Solar Energy</span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu - Using <Link> instead of <a> */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-blue-900 font-semibold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-blue-900">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsOpen(false)} // Close menu when a link is clicked
              className="block text-lg font-medium text-gray-800 shadow pb-2"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;