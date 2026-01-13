import React, { useState } from 'react';
import { Calculator, IndianRupee } from 'lucide-react';

const SolarCalculator = () => {
  const [bill, setBill] = useState(2000);

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-black mb-6 italic underline decoration-orange-500 underline-offset-8">How Much Can You Save?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Switching to solar isn't just an environmental choice—it's a financial one. Use our quick estimator to see your potential monthly savings.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <div className="bg-orange-500 p-1 rounded-full"><IndianRupee size={16}/></div>
              Reduce Monthly Bills by up to 90%
            </li>
            <li className="flex items-center gap-3">
              <div className="bg-orange-500 p-1 rounded-full"><IndianRupee size={16}/></div>
              Payback Period: 3 - 5 Years
            </li>
          </ul>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="bg-white text-blue-900 p-8 rounded-3xl shadow-2xl">
            <div className="flex items-center gap-2 mb-6">
              <Calculator className="text-orange-500" />
              <span className="font-bold uppercase tracking-tight">Savings Estimator</span>
            </div>
            
            <label className="block text-sm font-bold mb-2 uppercase">Monthly Electricity Bill (₹)</label>
            <input 
              type="range" min="500" max="10000" step="500" value={bill} 
              onChange={(e) => setBill(e.target.value)}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500 mb-4"
            />
            <div className="text-4xl font-black mb-8">₹{bill} <span className="text-sm font-normal text-gray-500">/ month</span></div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <p className="text-xs font-bold text-blue-800 uppercase">Estimated Savings</p>
                <p className="text-2xl font-black text-blue-900">₹{(bill * 0.85).toFixed(0)}</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                <p className="text-xs font-bold text-orange-800 uppercase">System Size</p>
                <p className="text-2xl font-black text-orange-600">{(bill / 800).toFixed(1)} kW</p>
              </div>
            </div>

            <button className="w-full mt-8 bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-orange-500 transition-all shadow-lg">
              Get Detailed Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarCalculator;