import React from 'react';

const testimonials = [
  {
    name: 'Olamide Adebayo',
    role: 'BMW 3-Series Owner',
    avatar: 'OA',
    rating: 5,
    text: "When I drove the car, I just knew this is the one. The engine is very sound and it moves very fast. The people at Kowa Motors helped me a lot to buy this car without stress.",
    location: 'Lagos, Nigeria',
  },
  {
    name: 'Folake Johnson',
    role: 'Toyota Corolla Owner',
    avatar: 'FJ',
    rating: 5,
    text: "I brought my old car to them and they gave me a good price for it. Then they brought my new Toyota straight to my house. I will always buy from them.",
    location: 'Abuja, Nigeria',
  },
  {
    name: 'Babatunde Ojo',
    role: 'Mercedes S-Class Owner',
    avatar: 'BO',
    rating: 5,
    text: "Paying for the car by installment was very easy. No hidden charges. And their mechanics are very good when I bring the car for servicing. Kowa is the best.",
    location: 'Ibadan, Nigeria',
  },
  {
    name: 'Yewande Balogun',
    role: 'Audi Q7 Owner',
    avatar: 'YB',
    rating: 5,
    text: "I ordered for my Audi and they delivered it very fast. The car is exactly what I wanted. The process was very simple and they didn't stress me at all.",
    location: 'Port Harcourt, Nigeria',
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-28 bg-[#080808] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold mb-4">From Our Owners</p>
          <h2 className="text-5xl md:text-6xl font-black font-display text-white mb-5">
            Real People.<br />
            <span className="text-gradient">Real Stories.</span>
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-amber-500/20 hover:bg-white/[0.04] transition-all duration-400"
            >
              <Stars count={t.rating} />

              <p className="text-gray-300 text-base leading-relaxed mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-900 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-gray-600 text-xs">{t.role}</p>
                  <p className="text-gray-700 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
          <div>
            <p className="text-3xl font-black text-white">4.9/5</p>
            <p className="text-xs text-gray-600 uppercase tracking-widest mt-1">Google Rating</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10"></div>
          <div>
            <p className="text-3xl font-black text-white">3,200+</p>
            <p className="text-xs text-gray-600 uppercase tracking-widest mt-1">Verified Reviews</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-white/10"></div>
          <div>
            <p className="text-3xl font-black text-white">#1</p>
            <p className="text-xs text-gray-600 uppercase tracking-widest mt-1">Luxury Dealer Award 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

