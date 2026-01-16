import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { X, Send, CheckCircle } from 'lucide-react';

const InquiryModal = ({ isOpen, onClose, productName }) => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace these with your EmailJS credentials
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setStatus('success');
        setTimeout(() => {
          onClose();
          setStatus('idle');
        }, 3000);
      }, (error) => {
        alert("Failed to send: " + error.text);
        setStatus('idle');
      });
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
              <h3 className="text-2xl font-black text-blue-900">Inquiry Sent!</h3>
              <p className="text-gray-500 mt-2">We will contact you regarding the <b>{productName}</b> shortly.</p>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-black text-blue-900 mb-1">Get a Quote</h3>
              <p className="text-sm text-orange-600 font-bold mb-6 uppercase tracking-wider italic">Interested in: {productName}</p>
              
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                {/* Hidden field to include product name in email */}
                <input type="hidden" name="product_name" value={productName} />
                
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Your Name</label>
                  <input type="text" name="user_name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-900 outline-none transition-all" placeholder="Enter Full Name" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Phone Number</label>
                  <input type="tel" name="user_phone" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-900 outline-none transition-all" placeholder="Enter Mobile Number" />
                </div>

                <button 
                  disabled={status === 'sending'}
                  className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-500 transition-all shadow-lg disabled:bg-gray-400"
                >
                  {status === 'sending' ? "Sending..." : <><Send size={18}/> Send Inquiry</>}
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