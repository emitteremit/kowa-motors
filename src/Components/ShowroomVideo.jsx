import React from 'react';

const ShowroomVideo = () => {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden flex items-center justify-center bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="https://cdn.pixabay.com/video/2021/08/21/85860-591781256_large.mp4" type="video/mp4" />
      </video>

      {/* Multi-layer overlay for cinematic feel */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/30 to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 via-transparent to-[#080808]/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Label */}
        <p className="text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold mb-5 animate-fade-in">
          Inside the Showroom
        </p>

        {/* Headline */}
        <h2 className="text-5xl md:text-7xl font-black font-display text-white mb-6 leading-none animate-fade-in">
          Where Art Meets<br />
          <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Engineering.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in">
          Step into our immersive physical and virtual showroom where every surface, every finish, and every detail tells a story of obsessive craftsmanship.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button className="btn-premium btn-primary">
            Book a Showroom Visit
          </button>
          <button className="btn-premium btn-secondary">
            Virtual Tour →
          </button>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default ShowroomVideo;

