import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import logoSymbolAsset from '../assets/logo-symbol.png';
import labCohortAsset from '../assets/lab-cohort.jpg';

export const Hero = ({ onDownloadBrandKit }) => {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Editorial Typography Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7">

            {/* Pill Tag with quiet contrast */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-xl text-xs font-semibold text-slate-200">
              <span className="w-2 h-2 rounded-full bg-[#43ae47]" />
              <span>Official Brand Identity System</span>
            </div>

            {/* Hero Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
              RLabZ Brand Identity Hub
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-semibold text-[#27a3ff] tracking-tight leading-relaxed">
              Transforming Ideas into Intelligent Solutions.
            </p>

            {/* Subtext with generous line-height */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              The official internal design system, brand guidelines, and creative asset repository for{' '}
              <strong className="text-white font-semibold">RLabZ Design | Development | Training</strong>.
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onDownloadBrandKit}
                className="btn-glass-primary flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wide"
              >
                <Download className="w-4 h-4" />
                <span>Download Logo Kit</span>
              </button>

              <Link
                to="/logos"
                className="btn-glass-secondary flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wide"
              >
                <span>Explore Logo System</span>
                <ArrowRight className="w-4 h-4 text-[#27a3ff]" />
              </Link>
            </div>

            {/* Quick Stats Grid */}
            <div className="pt-8 border-t border-white/10 w-full grid grid-cols-3 gap-4 text-left">
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-5 transition-all">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#f9440d]">4</span>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Core Colors</span>
              </div>
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-5 transition-all">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#27a3ff]">3</span>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Logo Lockups</span>
              </div>
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-5 transition-all">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#43ae47]">1</span>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Unified System</span>
              </div>
            </div>

          </div>

          {/* Right Column: Cinematic Documentary Photo + Floating Crucible Emblem */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-white/15 bg-[#001526] shadow-2xl group">

              {/* Documentary Cohort Background Photo */}
              <div className="relative h-96 w-full overflow-hidden">
                <img
                  src={labCohortAsset}
                  alt="RLabZ engineers and designers collaborating in the innovation lab"
                  className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Cinematic Navy Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001526] via-[#001526]/75 to-transparent" />

                {/* Centered Floating 3D Crucible Emblem */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <img
                    src={logoSymbolAsset}
                    alt="RLabZ 4-Blade Crucible Emblem"
                    className="w-48 h-48 object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Top Badge: Quiet editorial label */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 border border-white/20 text-[11px] font-semibold text-slate-200 backdrop-blur-md">
                  In The Lab &bull; Cohort 2026
                </div>
              </div>

              {/* Bottom Card Caption */}
              <div className="p-6 pt-2 bg-[#001526] border-t border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wider text-slate-200 uppercase">
                    The Innovation Crucible
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    #002c49 &bull; #27a3ff &bull; #43ae47
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Real client projects, high-stakes pressure, and transformed talent. The authentic crucible identity in action.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
