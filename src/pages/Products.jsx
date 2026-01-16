import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Droplets, ThermometerSun, Zap, ArrowRight, Table } from 'lucide-react';
import PumpSpecs from '../components/products/PumpSpecs'; // We'll build this table component
import InquiryModal from '../components/ui/InquiryModal';

const Products = () => {
  const [activeTab, setActiveTab] = useState('pumps');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const categories = [
    { id: 'pumps', name: 'Solar Pumps', icon: <Droplets />, desc: '1HP to 40HP Agricultural Solutions' },
    { id: 'heaters', name: 'Water Heaters', icon: <ThermometerSun />, desc: 'ETC & FPC Domestic Systems' },
    { id: 'pv', name: 'PV Systems', icon: <Zap />, desc: 'On-Grid & Hybrid Rooftops' },
  ];

  const productData = {
    pumps: [
      { name: "DC Submersible Pump", range: "1HP - 5HP", use: "Small to Mid Farms", img: "https://images.unsplash.com/photo-1581094288338-2314dddb7e8c?q=80&w=600" },
      { name: "AC Submersible Pump", range: "7.5HP - 20HP", use: "Large Scale Irrigation", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600" },
      { name: "High-Head Surface Pump", range: "25HP - 40HP", use: "Industrial & Community", img: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=600" },
    ],
    heaters: [
      { name: "ETC Solar Heater", range: "100 - 500 LPD", use: "Hard Water Areas", img: "https://images.unsplash.com/photo-1611365892117-00ac5ef43759?q=80&w=600" },
      { name: "FPC Solar Heater", range: "125 - 300 LPD", use: "Premium Durability", img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=600" },
    ]
  };


  const handleEnquire = (name) => {
    setSelectedProduct(name);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* 1. MOBILE CATEGORY BAR (Visible only on Mobile) */}
      <div className="md:hidden sticky top-20 z-40 bg-white border-b border-gray-200 w-full overflow-x-auto no-scrollbar">
        <div className="flex whitespace-nowrap p-4 gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm shrink-0 transition-all ${
                activeTab === cat.id ? 'bg-blue-900 text-white shadow-md' : 'bg-gray-100 text-gray-500'
              }`}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* 2. DESKTOP SIDEBAR (Hidden on Mobile) */}
      <aside className="hidden md:block w-80 bg-white border-r border-gray-200 p-8 pt-10 sticky top-0 h-screen">
        <h2 className="text-2xl font-black text-blue-900 mb-8 uppercase ">Categories</h2>
        <div className="space-y-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold transition-all ${
                activeTab === cat.id ? 'bg-blue-900 text-white shadow-xl translate-x-2' : 'hover:bg-blue-50 text-gray-500'
              }`}
            >
              <span className={activeTab === cat.id ? 'text-orange-400' : ''}>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>
      </aside>

      {/* 3. MAIN CONTENT AREA */}
      <main className="flex-1 p-6 md:p-12 pt-10 pb-20 md:pt-10">
        <div className="max-w-5xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-6xl font-black text-blue-900 uppercase">
              {categories.find(c => c.id === activeTab).name}
            </h1>
            <p className="text-gray-500 text-lg mt-2 font-medium">
              {categories.find(c => c.id === activeTab).desc}
            </p>
          </header>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {productData[activeTab]?.map((prod, i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group">
                  <div className="h-64 relative overflow-hidden">
                    <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-xs font-bold uppercase tracking-widest text-orange-400">Capacity</p>
                      <p className="text-2xl font-black">{prod.range}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-blue-900">{prod.name}</h3>
                    <p className="text-gray-500 mb-6 font-medium italic">Perfect for {prod.use}</p>
                    <div className="flex gap-3">
                      <button 
                        onClick={() => handleEnquire(prod.name)}
                        className="flex-1 bg-blue-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-orange-500 transition-all">
                        Enquire <ArrowRight size={18}/>
                      </button>
                      <button className="px-4 border-2 border-gray-200 rounded-xl hover:bg-gray-100 transition-colors">
                        <Table size={20} className="text-blue-900"/>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Show the spec table only for pumps */}
          {activeTab === 'pumps' && (
            <div className="mt-16">
              <PumpSpecs />
            </div>
          )}
        </div>
      </main>

      <InquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName={selectedProduct} 
      />
    </div>
  );
};

export default Products;