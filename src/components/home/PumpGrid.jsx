import React from 'react';
import { Droplets, Zap, ChevronRight } from 'lucide-react';

const PumpGrid = () => {
  const pumps = [
    { hp: "1HP - 3HP", type: "DC Submersible", use: "Small Farms", img: "https://images.unsplash.com/photo-1581094288338-2314dddb7e8c?auto=format&fit=crop&q=80&w=400" },
    { hp: "5HP - 7.5HP", type: "AC Submersible", use: "Mid-size Orchards", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400" },
    { hp: "10HP - 20HP", type: "AC Surface/Mono", use: "Large Irrigation", img: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=400" },
    { hp: "25HP - 40HP", type: "Industrial Grade", use: "Community Projects", img: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-blue-900 text-4xl font-black mb-4 uppercase tracking-tight">Agricultural Pump Solutions</h2>
          <div className="w-24 h-2 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            MNRE approved DC and AC solar water pump sets ranging from 1HP up to 40HP. Designed for maximum water output even in low light.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pumps.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2 group">
              <div className="h-48 overflow-hidden relative">
                <img src={item.img} alt={item.hp} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">Best Seller</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-blue-900 mb-2">
                  <Zap size={18} className="fill-blue-900" />
                  <span className="font-black text-xl">{item.hp}</span>
                </div>
                <p className="text-gray-800 font-bold mb-1">{item.type}</p>
                <p className="text-gray-500 text-sm mb-6 flex items-center gap-1">
                  <Droplets size={14} /> Ideal for {item.use}
                </p>
                <button className="w-full flex items-center justify-center gap-2 border-2 border-blue-900 text-blue-900 py-3 rounded-xl font-bold hover:bg-blue-900 hover:text-white transition-all">
                  Request Specs <ChevronRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PumpGrid;