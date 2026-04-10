import React, { useState } from 'react';

const WhyKowa = () => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      tab: 'Engineering',
      heading: 'Precision-Engineered at Every Level',
      body: 'Every Kowa vehicle is the result of thousands of engineering hours, wind-tunnel testing, and real-world validation across three continents. We don\'t cut corners — we eliminate them.',
      points: ['Aerospace-grade aluminum body', 'Dual-motor all-wheel drive', 'Active magnetic suspension', '800V ultra-fast charging architecture'],
      stat: '0.21 Cd',
      statLabel: 'Drag Coefficient',
    },
    {
      tab: 'Safety',
      heading: 'The Safest Car We\'ve Ever Built',
      body: 'Kowa vehicles consistently achieve the highest safety ratings across global testing bodies. Our proactive safety suite uses radar, cameras, and AI to anticipate hazards before they happen.',
      points: ['5-star NHTSA crash rating', 'Autonomous Emergency Braking', '360° radar sensor array', 'Reinforced crumple zone architecture'],
      stat: '5★',
      statLabel: 'NHTSA Safety Rating',
    },
    {
      tab: 'Sustainability',
      heading: 'Zero Compromise. Zero Emissions.',
      body: 'Our manufacturing process runs on 100% renewable energy. Every material is sourced responsibly, and we offer a comprehensive battery recycling program at end of life.',
      points: ['Carbon-neutral manufacturing', 'Recyclable battery packs', '100% renewable factory energy', 'Sustainably sourced materials'],
      stat: '0g',
      statLabel: 'Tailpipe Emissions',
    },
    {
      tab: 'Ownership',
      heading: 'A Partnership That Lasts a Lifetime',
      body: 'Buying a Kowa is just the beginning. Over-the-air software updates keep your vehicle current. Our concierge team is available 24/7. And your warranty is the best in the industry.',
      points: ['8-year / 150K mile battery warranty', 'Free OTA software updates for life', 'Complimentary 5-year roadside assistance', '24/7 concierge support'],
      stat: '8yr',
      statLabel: 'Battery Warranty',
    },
  ];

  const active = pillars[activeTab];

  return (
    <section className="py-28 bg-[#0c0c0c]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold mb-4">Why Kowa Motors</p>
          <h2 className="text-5xl md:text-6xl font-black font-display text-white">
            Built Different.<br />
            <span className="text-gradient">By Design.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {pillars.map((p, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === i
                  ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25'
                  : 'border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {p.tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="mb-6">
              <span className="text-6xl font-black text-amber-400 font-display">{active.stat}</span>
              <p className="text-sm uppercase tracking-widest text-gray-500 mt-1">{active.statLabel}</p>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold font-display text-white mb-5 leading-tight">{active.heading}</h3>
            <p className="text-gray-400 text-base leading-relaxed mb-8">{active.body}</p>
            <ul className="space-y-3">
              {active.points.map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <button className="mt-10 btn-premium btn-primary inline-block">
              Learn More
            </button>
          </div>

          {/* Right — Visual accent */}
          <div className="relative rounded-3xl overflow-hidden border border-white/5 bg-white/[0.02] p-10 min-h-[360px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent pointer-events-none"></div>
            <div className="text-center">
              <span className="text-[120px] font-black text-white/5 font-display leading-none block">
                {active.tab.charAt(0)}
              </span>
              <p className="text-white text-2xl font-display font-bold mt-4 -translate-y-14">{active.tab}</p>
              <div className="mt-2 -translate-y-10">
                {active.points.map((pt, i) => (
                  <div key={i} className="text-sm text-gray-600 py-2 border-b border-white/5 last:border-0">{pt}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKowa;

