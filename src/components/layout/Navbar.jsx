import React, { useState } from 'react';
import { Sun, Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Sun className="h-10 w-10 text-orange-500 fill-orange-500" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-blue-900 leading-none tracking-tight">ESTEEM</span>
                <span className="text-[10px] font-semibold text-orange-600 tracking-[0.2em] uppercase">Solar Energy</span>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-900 font-semibold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+91XXXXXXXXXX"
              className="flex items-center gap-2 bg-blue-900 text-white px-5 py-2.5 rounded-full font-bold hover:bg-orange-600 transition-all shadow-md"
            >
              <Phone size={18} />
              Call Now
            </a>
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
            <a key={link.name} href={link.href} className="block text-lg font-medium text-gray-800 border-b pb-2">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;