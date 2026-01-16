import React, { useState } from 'react';
import { Droplets, ThermometerSun, Zap } from 'lucide-react';

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState('pumps');

  // Unified Data for the Catalog
  const catalogData = {
    pumps: {
      title: "Solar Water Pumps",
      description: "MNRE approved sets for high-efficiency irrigation.",
      items: ["1HP - 3HP DC Submersible", "5HP - 7.5HP AC Submersible", "10HP - 40HP Industrial Surface"]
    },
    heaters: {
      title: "Solar Water Heaters",
      description: "ISO Certified heating for home and industry.",
      items: ["100 LPD Domestic", "250 LPD Premium", "500 LPD+ Industrial ETC"]
    },
    systems: {
      title: "On-Grid PV Systems",
      description: "Reduce electricity bills by up to 90%.",
      items: ["3kW Residential Set", "5kW Commercial Set", "10kW+ Industrial Grid"]
    }
  };

  return (
    <section className="py-20 bg-white" id="catalog">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-black text-blue-900 text-center mb-10 uppercase italic">Product Catalog</h2>
        
        {/* Category Toggle Buttons - THE FILTER */}
        <div className="flex justify-center gap-4 mb-16">
          <button 
            onClick={() => setActiveCategory('pumps')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeCategory === 'pumps' ? 'bg-blue-900 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-500'}`}
          >
            <Droplets size={20}/> Pumps
          </button>
          <button 
            onClick={() => setActiveCategory('heaters')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeCategory === 'heaters' ? 'bg-orange-500 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-500'}`}
          >
            <ThermometerSun size={20}/> Heaters
          </button>
          <button 
            onClick={() => setActiveCategory('systems')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${activeCategory === 'systems' ? 'bg-yellow-500 text-white shadow-lg scale-105' : 'bg-gray-100 text-gray-500'}`}
          >
            <Zap size={20}/> PV Systems
          </button>
        </div>

        {/* Display Area - ONLY shows the selected category */}
        <div className="bg-blue-50/50 p-8 rounded-3xl border-2 border-blue-100 animate-in fade-in duration-500">
          <div className="max-w-3xl">
            <h3 className="text-4xl font-black text-blue-900 mb-2">{catalogData[activeCategory].title}</h3>
            <p className="text-gray-600 mb-8 font-medium italic">{catalogData[activeCategory].description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {catalogData[activeCategory].items.map((item, index) => (
                <div key={index} className="bg-white p-5 rounded-2xl shadow-sm border border-blue-100 font-bold text-blue-900 flex justify-between items-center">
                  {item}
                  <button className="text-xs bg-orange-500 text-white px-3 py-1 rounded-lg">Details</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;