import React from 'react';

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Flexible Financing',
    desc: 'Tailored loan and lease options with competitive rates from 2.9% APR. Pre-approval in minutes, no impact to your credit score.',
    cta: 'Get Pre-Approved',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Book a Test Drive',
    desc: 'Experience the thrill firsthand. Schedule a private test drive at your nearest Kowa showroom or request a home delivery demo.',
    cta: 'Schedule Now',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: 'Trade-In Program',
    desc: "Get a guaranteed fair-market offer for your current vehicle in under 30 minutes. We accept any make, any model, any condition.",
    cta: 'Value My Trade',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Certified Servicing',
    desc: 'Factory-trained technicians. Genuine parts. Complimentary pickup & drop-off. Your Kowa stays at peak performance for life.',
    cta: 'Book Service',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Custom Orders',
    desc: 'Design your perfect Kowa from scratch. Choose exterior color, interior trim, performance package, and every optional feature.',
    cta: 'Start Configuring',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Home Delivery',
    desc: 'No showroom visit required. Buy fully online and have your new Kowa delivered to your front door anywhere in the country.',
    cta: 'Order Online',
  },
];

const Services = () => {
  return (
    <section className="py-28 bg-[#080808]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold mb-4">What We Offer</p>
          <h2 className="text-5xl md:text-6xl font-black font-display text-white mb-5">
            The Full<br />
            <span className="text-gradient">Experience.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            From discovery to delivery and beyond — we've redefined what it means to own a premium vehicle.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-amber-500/30 transition-all duration-400 cursor-pointer"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>

              <div className="text-amber-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold font-display text-white mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.desc}</p>
              <button className="text-sm font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                {s.cta}
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

