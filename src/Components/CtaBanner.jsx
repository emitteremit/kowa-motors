import React from 'react';

const CtaBanner = () => {
  return (
    <section className="py-28 bg-[#080808] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-amber-500/8 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold mb-5">Ready To Drive?</p>
          <h2 className="text-5xl md:text-7xl font-black font-display text-white mb-6 leading-none">
            Your Kowa Awaits.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Thousands of Kowa owners started exactly where you are. One conversation with our team changes everything.
            Book your private consultation today — no pressure, no obligation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-premium btn-primary text-base">
              Book a Consultation
            </button>
            <button className="btn-premium btn-secondary text-base">
              Explore Inventory
            </button>
          </div>

          {/* Micro trust signals */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No obligation
            </span>
            <span className="hidden sm:block text-gray-700">·</span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Pre-approval in 2 minutes
            </span>
            <span className="hidden sm:block text-gray-700">·</span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Nationwide home delivery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;

