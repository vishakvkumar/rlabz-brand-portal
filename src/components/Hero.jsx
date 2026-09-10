import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import logoSymbolAsset from '../assets/logo-symbol.png';

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

          {/* Right Column: Pure 3D Translucent Glass Specimen Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-[var(--rl-chip-bg)] backdrop-blur-2xl border border-[var(--rl-surface-border)] rounded-3xl p-8 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.37)] hover:border-[#27a3ff]/40 transition-all duration-500 flex flex-col items-center justify-center text-center group overflow-hidden">
              
              {/* Inner illuminated glass accent ring */}
              <div className="absolute inset-4 rounded-2xl border border-dashed border-[var(--rl-surface-border)] pointer-events-none group-hover:border-[#27a3ff]/40 transition-colors" />

              {/* Floating Color Blade Badges */}
              <div className="absolute top-6 left-6 z-20 px-3 py-1.5 rounded-xl bg-[#001526]/80 border border-white/15 text-[11px] font-semibold text-slate-200 flex items-center gap-1.5 shadow-xl backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#27a3ff] shadow-[0_0_8px_#27a3ff]" />
                <span>#27a3ff Cyan</span>
              </div>

              <div className="absolute top-6 right-6 z-20 px-3 py-1.5 rounded-xl bg-[#001526]/80 border border-white/15 text-[11px] font-semibold text-slate-200 flex items-center gap-1.5 shadow-xl backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#43ae47] shadow-[0_0_8px_#43ae47]" />
                <span>#43ae47 Green</span>
              </div>

              {/* Centered Floating 3D Emblem */}
              <div className="relative z-10 flex items-center justify-center py-6 my-2">
                <img
                  src={logoSymbolAsset}
                  alt="RLabZ 4-Blade Crucible Emblem Specimen"
                  className="w-56 h-56 object-contain filter drop-shadow-[0_20px_45px_rgba(39,163,255,0.45)] transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Bottom Card Caption */}
              <div className="pt-4 border-t border-[var(--rl-surface-border)] w-full text-center relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#27a3ff]">
                  3D Translucent Glass Specimen
                </span>
                <p className="text-[11px] text-[var(--rl-muted)] mt-1.5 max-w-xs mx-auto leading-relaxed">
                  Precision 4-blade curved emblem symbolizing heat, pressure, and transformation.
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
