import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero_car.png" 
          alt="Hero Car" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/40 to-black/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 animate-fade-in uppercase">
          Kowa <span className="text-amber-400">Motors</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-10 tracking-wide font-light max-w-2xl mx-auto">
          The pinnacle of electric performance and sustainable luxury. Engineered for the future.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="btn-premium btn-primary w-full sm:w-auto">
            Custom Order
          </button>
          <button className="btn-premium btn-secondary w-full sm:w-auto">
            View Inventory
          </button>
        </div>
      </div>

      {/* Hero Bottom Info */}
      <div className="absolute bottom-12 w-full flex justify-center space-x-12 md:space-x-24 text-center z-10 px-6">
        <div>
          <p className="text-2xl md:text-3xl font-bold">1.9s</p>
          <p className="text-xs uppercase tracking-widest text-gray-400">0-60 mph</p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-bold">420 mi</p>
          <p className="text-xs uppercase tracking-widest text-gray-400">Range (EPA)</p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-bold">Dual</p>
          <p className="text-xs uppercase tracking-widest text-gray-400">Motor AWD</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

