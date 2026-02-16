import React, { useState } from 'react';
import { X, MessageCircle, CheckCircle } from 'lucide-react';

const InquiryModal = ({ isOpen, onClose, productName }) => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [status, setStatus] = useState('idle');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    setStatus('sending');

    // 1. Your business phone number (include country code, e.g., 91 for India)
    const businessPhone = "919945385327"; 
    
    // 2. Construct the message
    const message = `*New Solar Inquiry*%0A%0A` +
                    `*Product:* ${productName}%0A` +
                    `*Name:* ${formData.name}%0A` +
                    `*Phone:* ${formData.phone}%0A%0A` +
                    `Hello Esteem Solar, I am interested in getting a quote for this product.`;

    // 3. Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${businessPhone}?text=${message}`;

    // 4. Open WhatsApp and show success state
    window.open(whatsappUrl, '_blank');
    
    setStatus('success');
    setTimeout(() => {
      onClose();
      setStatus('idle');
      setFormData({ name: '', phone: '' });
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-blue-900/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-blue-900">
          <X size={24} />
        </button>

        <div className="p-8">
          {status === 'success' ? (
            <div className="text-center py-10 animate-in zoom-in duration-300">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-black text-blue-900">Opening WhatsApp...</h3>
              <p className="text-gray-500 mt-2">Thank you for your interest in the <b>{productName}</b>.</p>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-black text-blue-900 mb-1">Get a Quote</h3>
              <p className="text-sm text-orange-600 font-bold mb-6 uppercase tracking-wider italic">Interested in: {productName}</p>
              
              <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-900 outline-none transition-all" 
                    placeholder="Enter Full Name" 
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-900 outline-none transition-all" 
                    placeholder="Enter Mobile Number" 
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-green-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all shadow-lg"
                >
                  <MessageCircle size={20}/> Chat on WhatsApp
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InquiryModal;