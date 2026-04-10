import React from 'react';
import imgBmw from '../assets/bmw.jpg';
import img18 from '../assets/18.jpg';
import imgToyota from '../assets/toyota.jpg';

const deals = [
  {
    badge: 'Limited Time',
    title: 'BMW 3-Series',
    subtitle: '2025 Build — Ready to Ship',
    image: imgBmw,
    saving: '₦5,000,000 Off MSRP',
    price: '₦40,000,000',
    tag: 'Sedan',
    tagColor: 'text-red-400 border-red-400/30 bg-red-400/10',
  },
  {
    badge: 'Finance Special',
    title: 'Mercedes S-Class',
    subtitle: 'Certified Pre-Owned · 18K miles',
    image: img18,
    saving: '0% APR for 48 Months',
    price: '₦110,000,000',
    tag: 'Luxury',
    tagColor: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
  },
  {
    badge: 'New Arrival',
    title: 'Toyota Corolla',
    subtitle: '2025 Model · Front-Wheel Drive',
    image: imgToyota,
    saving: 'Free Home Delivery',
    price: '₦22,500,000',
    tag: 'Compact',
    tagColor: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
  },
];

const FeaturedDeals = () => {
  return (
    <section className="py-28 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold mb-4">Exclusive Offers</p>
            <h2 className="text-5xl md:text-6xl font-black font-display text-white leading-tight">
              Today's<br />
              <span className="text-gradient">Best Deals.</span>
            </h2>
          </div>
          <button className="mt-6 md:mt-0 text-sm font-semibold text-amber-400 hover:text-amber-300 border-b border-amber-400/40 pb-1 transition-colors">
            View All Inventory →
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {deals.map((deal, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden border border-white/5 bg-[#111] hover:border-amber-500/20 transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/5"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-amber-500 text-black rounded-full">
                  {deal.badge}
                </span>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${deal.tagColor}`}>
                    {deal.tag}
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold bg-emerald-400/10 border border-emerald-400/20 px-3 py-1 rounded-full">
                    {deal.saving}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-white mt-4 mb-1">{deal.title}</h3>
                <p className="text-gray-500 text-sm mb-5">{deal.subtitle}</p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <p className="text-2xl font-black text-white">{deal.price}</p>
                    <p className="text-xs text-gray-600 mt-0.5">Starting price</p>
                  </div>
                  <button className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold rounded-full transition-colors duration-300">
                    View Deal
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

export default FeaturedDeals;
