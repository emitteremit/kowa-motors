import React from 'react';
import img5 from '../assets/5.jpg';
import img11 from '../assets/11.jpg';
import imgAuid from '../assets/auid.jpg';

const vehicles = [
  {
    name: 'BMW 3-Series',
    tagline: 'Sport Sedan',
    image: img5,
    price: 'Starting at ₦45,500,000',
    range: '320 mi',
    speed: '5.6s',
  },
  {
    name: 'Ford F-150 Lightning',
    tagline: 'Electric Pickup',
    image: img11,
    price: 'Starting at ₦78,000,000',
    range: '230 mi',
    speed: '4.4s',
  },
  {
    name: 'Audi Q7 SUV',
    tagline: 'Luxury SUV',
    image: imgAuid,
    price: 'Starting at ₦85,000,000',
    range: '340 mi',
    speed: '5.9s',
  },
];

const VehicleShowcase = () => {
  return (
    <section className="py-28 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold mb-3">Our Lineup</p>
            <h2 className="text-5xl md:text-6xl font-bold font-display text-white leading-tight">
              Built for<br />
              <span className="text-gray-600">the bold.</span>
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="text-gray-500 text-base max-w-xs text-right leading-relaxed">
              Experience the future of mobility with our current lineup of premium vehicles.
            </p>
            <button className="mt-4 text-sm font-semibold text-amber-400 hover:text-amber-300 border-b border-amber-400 pb-0.5 transition-colors float-right">
              Compare Models →
            </button>
          </div>
        </div>

        {/* Vehicle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {vehicles.map((car, index) => (
            <div
              key={index}
              className="group cursor-pointer border border-white/5 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-500 hover:-translate-y-2 bg-[#111]"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>

              {/* Info */}
              <div className="p-7">
                <p className="text-xs text-amber-400 uppercase tracking-[0.2em] font-semibold mb-1">{car.tagline}</p>
                <h3 className="text-2xl font-bold font-display text-white mb-3">{car.name}</h3>

                {/* Specs row */}
                <div className="flex gap-6 mb-5">
                  <div>
                    <p className="text-lg font-bold text-white">{car.speed}</p>
                    <p className="text-[10px] uppercase tracking-widest text-gray-600">0–60 mph</p>
                  </div>
                  <div className="border-l border-white/10 pl-6">
                    <p className="text-lg font-bold text-white">{car.range}</p>
                    <p className="text-[10px] uppercase tracking-widest text-gray-600">Range</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <p className="text-sm text-gray-500 font-medium">{car.price}</p>
                  <button className="text-sm font-semibold text-white hover:text-amber-400 transition-colors">
                    Order →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleShowcase;
