import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SolarEnergyFlow from '../ui/SolarEnergyFlow';
import SolarParticles from '../ui/SolarParticles';


const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Left Content */}
        <div className="md:w-1/2 text-left space-y-6 z-10">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-sm font-bold border border-blue-100">
            <CheckCircle size={16} /> ISO 9001:2015 Certified
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-blue-900 leading-tight">
            Powering Your <br />
            <span className="text-orange-500 underline decoration-blue-900/10">Future with Solar</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-lg">
            High-efficiency solar solutions for agricultural pumps, residential rooftops, and commercial sectors. Join the green energy revolution in Karnataka.
          </p>
          <div className="flex flex-wrap gap-2 md:gap-4 ">
            <button className="bg-orange-500 text-white px-5 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-900 transition-all flex items-center gap-2 group">
              Get Free Survey <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-blue-900 text-blue-900 px-5 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all">
              View Products
            </button>
          </div>
        </div>

          {/* Right Image */}
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl ">
            <img 
              // Verified Unsplash Solar Image
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800" 
              alt="Solar Panel Installation"
              className="w-full h-[500px] object-cover"
            />
          </div>
          {/* Stats Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100  sm:block">
            <p className="text-3xl font-bold text-blue-900">500+</p>
            <p className="text-sm font-semibold text-gray-500 uppercase">Projects Done</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;