import React from 'react';

import adaniImg from '../../assets/adani-solar.jpg';
import tataLogo from '../../assets/tata-power-solar-logo.jpg';
import vikramLogo from '../../assets/vikram-solar.jpeg';
import waareeLogo from '../../assets/waree-logo.png';


const TrustGallery = () => {
  const brands = [
    { name: "Waaree", img: waareeLogo },
    { name: "Tata Power Solar", img: tataLogo },
    { name: "Adani Solar", img: adaniImg },
    { name: "Vikram Solar", img: vikramLogo }
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Certification Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 border-b pb-8 border-dashed border-gray-200">
          <div className="text-center">
            <p className="text-xs font-bold text-orange-600 uppercase tracking-widest">Quality Standard</p>
            <p className="text-xl font-black text-blue-900">ISO 9001:2015</p>
          </div>
          <div className="h-10 w-[1px] bg-gray-300 hidden md:block"></div>
          <div className="text-center">
            <p className="text-xs font-bold text-orange-600 uppercase tracking-widest">Govt. Approved</p>
            <p className="text-xl font-black text-blue-900">MNRE & MSME</p>
          </div>
          <div className="h-10 w-[1px] bg-gray-300 hidden md:block"></div>
          <div className="text-center">
            <p className="text-xs font-bold text-orange-600 uppercase tracking-widest">Marketplace</p>
            <p className="text-xl font-black text-blue-900">GeM Registered</p>
          </div>
        </div>

        {/* Brand Logos */}
        <p className="text-center text-xl text-gray-500 font-semibold mb-8 uppercase text-sm tracking-widest">Our Authorized Technology Partners</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-70 hover:opacity-100 transition-opacity">
          {brands.map((brand) => (
            <div key={brand.name} className="flex justify-center p-4 grayscale hover:grayscale-0 transition-all cursor-pointer">
              <img src={brand.img} alt={brand.name} className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustGallery;