import React from 'react';

const stats = [
  { value: '24+', label: 'Years in Business' },
  { value: '15K+', label: 'Vehicles Sold' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '6', label: 'Showroom Locations' },
];

const StatsBanner = () => {
  return (
    <section className="bg-[#0f0f0f] border-y border-white/5 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="group">
              <p className="text-4xl md:text-5xl font-black font-display text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;

