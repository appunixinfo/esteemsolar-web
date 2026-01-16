import React from 'react';

const PumpSpecs = () => {
  const specs = [
    { hp: "3 HP", type: "DC Submersible", head: "30-50 Meters", discharge: "80,000 LPD" },
    { hp: "5 HP", type: "DC/AC Submersible", head: "50-70 Meters", discharge: "1,20,000 LPD" },
    { hp: "7.5 HP", type: "AC Submersible", head: "70-100 Meters", discharge: "1,80,000 LPD" },
    { hp: "10 HP+", type: "AC Surface/Mono", head: "Custom", discharge: "High Volume" },
  ];

  return (
    <div className="overflow-x-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-6 mt-12">
      <h3 className="text-2xl font-black text-blue-900 mb-6 px-2 italic">Performance Chart</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="p-4 rounded-tl-xl font-bold uppercase text-sm">Pump Capacity</th>
            <th className="p-4 font-bold uppercase text-sm">Motor Type</th>
            <th className="p-4 font-bold uppercase text-sm">Max Head</th>
            <th className="p-4 rounded-tr-xl font-bold uppercase text-sm">Daily Output</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {specs.map((s, i) => (
            <tr key={i} className="border-b border-gray-100 hover:bg-orange-50 transition-colors">
              <td className="p-4 font-bold text-blue-900">{s.hp}</td>
              <td className="p-4 font-medium">{s.type}</td>
              <td className="p-4">{s.head}</td>
              <td className="p-4 font-black text-orange-600">{s.discharge}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-gray-400 mt-4 italic font-medium">
        *Discharge based on standard 7.15 kWh/m²/day solar radiation.
      </p>
    </div>
  );
};

export default PumpSpecs;