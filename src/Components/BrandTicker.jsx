import React from 'react';

const brands = [
  'TOYOTA', 'HONDA', 'LEXUS', 'MERCEDES-BENZ', 'HYUNDAI',
  'KIA', 'FORD', 'NISSAN', 'VOLKSWAGEN', 'MAZDA',
];

const BrandTicker = () => {
  // Double the array to create seamless looping
  const repeated = [...brands, ...brands];

  return (
    <section className="py-10 bg-[#0a0a0a] border-y border-white/5 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-gray-700 mb-6 font-medium">
        Trusted Brands We Deliver
      </p>
      <div className="relative flex">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee inline-flex gap-16 items-center">
          {repeated.map((brand, i) => (
            <span
              key={i}
              className="text-sm font-black tracking-[0.25em] text-white/15 hover:text-white/50 transition-colors duration-300 whitespace-nowrap uppercase cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandTicker;

