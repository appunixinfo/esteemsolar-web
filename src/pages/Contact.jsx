import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pb-10 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-blue-900 uppercase">
            Let's <span className="text-orange-500 font-outline-2">Connect</span>
          </h1>
          <p className="text-xl text-gray-500 mt-6 max-w-2xl mx-auto font-medium italic">
            Have a question about solar pumps or rooftop installation? Our expert team in Chikodi is ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-black text-blue-900 mb-8 italic">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="bg-orange-100 p-4 rounded-2xl text-orange-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Call Us</p>
                    <a href="tel:+919876543210" className="text-xl font-bold text-blue-900 hover:text-orange-500 transition-colors">+91 95353 53246</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-blue-100 p-4 rounded-2xl text-blue-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Us</p>
                    <a href="mailto:info@esteemsolar.com" className="text-xl font-bold text-blue-900 hover:text-orange-500 transition-colors">info@esteemsolar.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-gray-100 p-4 rounded-2xl text-gray-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Office Location</p>
                    <p className="text-lg font-bold text-blue-900">Kore Nagar, Chikodi<br />Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="bg-blue-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
              <Clock className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10" />
              <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Clock size={24} className="text-orange-400" /> Working Hours
              </h4>
              <ul className="space-y-3 font-medium text-blue-100">
                <li className="flex justify-between border-b border-blue-800 pb-2">
                  <span>Mon - Sat:</span>
                  <span className="font-bold text-white">10:00 AM - 07:00 PM</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span>Sunday:</span>
                  <span className="font-bold text-orange-400 uppercase tracking-widest">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-orange-100 p-8 md:p-12 rounded-[3.5rem] border border-gray-100 shadow-sm">
            <h3 className="text-3xl font-black text-blue-900 mb-8">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-2">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border-transparent focus:border-blue-900 focus:ring-0 outline-none transition-all shadow-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-2">Phone</label>
                  <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-white border-transparent focus:border-blue-900 focus:ring-0 outline-none transition-all shadow-sm" placeholder="+91 ..." />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-2">Interested In</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-white border-transparent focus:border-blue-900 focus:ring-0 outline-none transition-all shadow-sm appearance-none font-medium">
                  <option>Solar Water Pump</option>
                  <option>Solar Water Heater</option>
                  <option>Rooftop Solar PV</option>
                  <option>Maintenance Service</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-2">Message</label>
                <textarea rows="4" className="w-full px-6 py-4 rounded-2xl bg-white border-transparent focus:border-blue-900 focus:ring-0 outline-none transition-all shadow-sm" placeholder="Tell us about your requirements..."></textarea>
              </div>

              <button className="w-full bg-blue-900 text-white py-5 rounded-2xl font-black text-lg uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-orange-500 transition-all shadow-xl group">
                Send Message <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-24 rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white h-[450px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30615.65504770913!2d74.56243957086701!3d16.427016159821708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0ea0295149549%3A0x4bd71c71eafabff4!2sKore%20Nagar%2C%20Chikodi%2C%20Karnataka%20591201!5e0!3m2!1sen!2sin!4v1771219028000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;