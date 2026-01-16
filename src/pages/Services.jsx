import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, Settings, ShieldCheck, Droplets } from 'lucide-react';

const Services = () => {
  const allServices = [
    {
      title: "EPC Solutions",
      category: "Industrial & Commercial",
      desc: "Comprehensive Engineering, Procurement, and Construction services for large-scale solar power plants.",
      icon: <HardHat size={32} />,
      points: ["Technical Feasibility Studies", "Custom Mounting Structures", "Grid Integration"]
    },
    {
      title: "Solar Water Pump Installation",
      category: "Agricultural",
      desc: "Expert installation of 1HP to 40HP solar pump sets for farms, ensuring maximum water discharge.",
      icon: <Droplets size={32} />,
      points: ["Borewell Analysis", "Auto-Controller Setup", "Anti-Theft Mounting"]
    },
    {
      title: "O&M (Maintenance)",
      category: "Lifetime Support",
      desc: "Routine cleaning and technical health checks to ensure your solar assets perform at 100% efficiency.",
      icon: <Settings size={32} />,
      points: ["Module Cleaning", "Inverter Testing", "Performance Reporting"]
    }
  ];

  return (
    <div className="bg-white min-h-screen pb-10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section with Image */}
        <header className="mb-10 pb-8 flex flex-col md:flex-row gap-12 items-center shadow-sm">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-black text-blue-900 uppercase leading-none">
              Expert <span className="text-orange-500">Solar</span> <br /> Engineering
            </h1>
            <p className="text-xl text-gray-500 mt-6 font-medium italic">
              At Esteem Solar, we bridge the gap between high-tech equipment and real-world performance.
            </p>
          </div>
          <div className="hidden md:block flex-1 h-70 rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1605980413988-9ff24c537935" 
              alt="Expert Solar Engineering" 
              className="w-full h-full object-cover"
            />
          </div>
        </header>
        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {allServices.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[3rem] bg-gray-100 border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div className="bg-white w-20 h-20 rounded-3xl flex items-center justify-center shadow-sm mb-8 text-blue-900">
                {service.icon}
              </div>
              <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">{service.category}</p>
              <h3 className="text-3xl font-black text-blue-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed font-medium">{service.desc}</p>
              
              <ul className="space-y-3">
                {service.points.map((p, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-bold text-blue-900/70">
                    <ShieldCheck size={16} className="text-green-500" /> {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* THE PROCESS SECTION */}
        <div className="bg-blue-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-12 italic underline decoration-orange-500 underline-offset-8">Our Working Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {[
                { n: "01", t: "Site Survey", d: "Shadow analysis & technical mapping." },
                { n: "02", t: "Design", d: "Custom CAD structures & electrical layout." },
                { n: "03", t: "Execution", d: "Safe, rapid installation by experts." },
                { n: "04", t: "Monitoring", d: "Live testing & grid commissioning." }
              ].map((step, i) => (
                <div key={i} className="space-y-4">
                  <span className="text-6xl font-black opacity-20">{step.n}</span>
                  <h4 className="text-xl font-bold">{step.t}</h4>
                  <p className="text-blue-100 text-sm">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;