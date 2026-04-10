import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import StatsBanner from '../Components/StatsBanner';
import ShowroomVideo from '../Components/ShowroomVideo';
import VehicleShowcase from '../Components/VehicleShowcase';
import FeaturedDeals from '../Components/FeaturedDeals';
import Services from '../Components/Services';
import WhyKowa from '../Components/WhyKowa';
import BrandTicker from '../Components/BrandTicker';
import Testimonials from '../Components/Testimonials';
import CtaBanner from '../Components/CtaBanner';

const Homepage = () => {
  return (
    <main className="bg-[#080808] min-h-screen text-white">
      <Navbar />

      {/* 1. Cinematic Hero */}
      <Hero />

      {/* 2. Stats — Quick trust signals */}
      <StatsBanner />

      {/* 3. Featured Deals */}
      <FeaturedDeals />

      {/* 4. Showroom Video Clip */}
      <ShowroomVideo />

      {/* 5. Vehicle Lineup */}
      <VehicleShowcase />

      {/* 6. Services */}
      <Services />

      {/* 7. Why Kowa — Tabbed pillars */}
      <WhyKowa />

      {/* 8. Brand Prestige Ticker */}
      <BrandTicker />

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. CTA Banner */}
      <CtaBanner />

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-1">
              <p className="text-2xl font-black font-display text-white mb-4">
                KOWA<span className="text-amber-400">MOTORS</span>
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Redefining the future of performance, luxury, and sustainable mobility since 2001.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'Instagram', 'YouTube'].map(s => (
                  <a
                    key={s}
                    href="#"
                    className="text-xs text-gray-600 hover:text-white transition-colors uppercase tracking-widest"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-600 mb-5 font-semibold">Vehicles</p>
              <ul className="space-y-3">
                {['Model S', 'Kowa X SUV', 'Aether GT', 'Kowa Compact', 'Custom Order'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-600 mb-5 font-semibold">Ownership</p>
              <ul className="space-y-3">
                {['Financing', 'Trade-In', 'Test Drive', 'Servicing', 'Warranty', 'Roadside Assist'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-600 mb-5 font-semibold">Company</p>
              <ul className="space-y-3">
                {['About Kowa', 'Careers', 'Newsroom', 'Investors', 'Sustainability', 'Contact'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-700">
              &copy; {new Date().getFullYear()} Kowa Motors, Inc. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-gray-700">
              <a href="#" className="hover:text-gray-400">Privacy Policy</a>
              <a href="#" className="hover:text-gray-400">Terms of Service</a>
              <a href="#" className="hover:text-gray-400">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Homepage;

