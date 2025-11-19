// components/LogisticsHero.jsx
'use client';

import { useRef, useEffect } from 'react';

import React from 'react';

const LogisticsHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-light text-white/80 tracking-wider">
              PREMIUM GLOBAL LOGISTICS
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-light text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Excellence in
            </span>
            <br />
            <span className="font-serif italic bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Premium Logistics
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl lg:text-2xl text-white/70 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Specialized handling for luxury automotive parts, high-value electronics, 
            and seamless global import-export solutions with uncompromising security.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="text-white font-semibold text-lg tracking-wide relative">
                Request Premium Quote
              </span>
            </button>
            
            <button className="group px-8 py-4 border border-white/30 rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
              <span className="text-white font-medium text-lg tracking-wide">
                Explore Services
              </span>
            </button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white mb-2">99.7%</div>
              <div className="text-white/60 text-sm font-light tracking-wide">DELIVERY SUCCESS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-white/60 text-sm font-light tracking-wide">COUNTRIES COVERED</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/60 text-sm font-light tracking-wide">PREMIUM SUPPORT</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsHero;