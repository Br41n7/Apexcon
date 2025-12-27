
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&w=1920&q=80" 
          alt="Construction Site" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-1 w-12 bg-blue-500"></div>
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Excellence in Engineering</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display text-white font-bold leading-tight mb-6">
            Building The <span className="text-blue-500">Future</span> With Precision
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            From residential havens to industrial giants, we craft architectural masterpieces that stand the test of time. Quality, innovation, and sustainability in every brick.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#portfolio" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-xl shadow-blue-900/20 text-center"
            >
              View Our Portfolio
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 font-bold rounded-lg transition-all text-center"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
