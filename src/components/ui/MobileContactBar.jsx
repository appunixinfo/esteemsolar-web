import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const MobileContactBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-gray-200 p-3 flex gap-3 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/919844854591?text=I'm interested in Esteem Solar solutions"
        className="flex-1 bg-green-500 text-white flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm"
      >
        <MessageCircle size={18} /> WhatsApp
      </a>

      {/* Direct Call Button */}
      <a 
        href="tel:+919844854591"
        className="flex-1 bg-blue-900 text-white flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm"
      >
        <Phone size={18} /> Call Now
      </a>
    </div>
  );
};

export default MobileContactBar;