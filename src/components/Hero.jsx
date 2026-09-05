import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Download, Sparkles } from 'lucide-react';
import logoSymbolAsset from '../assets/logo-symbol.png';

export const Hero = ({ onDownloadBrandKit }) => {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Editorial Typography Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">

            {/* Pill Tag with subtle green-to-cyan gradient border */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[var(--rl-chip-bg)] border border-cyan-500/30 backdrop-blur-xl shadow-inner text-xs font-semibold text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-[#f9440d]" />
              <span>Official Brand System</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#43ae47] animate-ping" />
            </div>

            {/* Hero Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-[var(--rl-heading)]">
              RLabZ <span className="bg-gradient-to-r from-[var(--rl-heading)] via-[var(--rl-body)] to-[#27a3ff] bg-clip-text text-transparent">Brand Identity Hub</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-semibold text-[#27a3ff] tracking-tight">
              Transforming Ideas into Intelligent Solutions.
            </p>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[var(--rl-body)] max-w-2xl leading-relaxed font-normal">
              The official internal design system, brand guidelines, and vector asset repository for{' '}
              <strong className="text-[var(--rl-heading)] font-semibold">RLabZ Design | Development | Training</strong>.
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onDownloadBrandKit}
                className="btn-glass-primary flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-extrabold"
              >
                <Download className="w-4 h-4" />
                <span>Download Master Brand Kit</span>
              </button>

              <Link
                to="/logos"
                className="btn-glass-secondary flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold"
              >
                <span>Explore Logo System</span>
                <ArrowDown className="w-4 h-4 text-[#27a3ff] -rotate-90" />
              </Link>
            </div>

            {/* Quick Stats Grid */}
            <div className="pt-8 border-t border-[var(--rl-surface-border)] w-full grid grid-cols-3 gap-4 text-left">
              <div className="bg-[var(--rl-chip-bg)] backdrop-blur-2xl border border-[var(--rl-surface-border)] rounded-3xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] hover:border-cyan-400/30 transition-all duration-300">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#f9440d]">4</span>
                <span className="text-[11px] font-semibold text-[var(--rl-muted)] uppercase tracking-wider">Core Colors</span>
              </div>
              <div className="bg-[var(--rl-chip-bg)] backdrop-blur-2xl border border-[var(--rl-surface-border)] rounded-3xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] hover:border-cyan-400/30 transition-all duration-300">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#27a3ff]">3</span>
                <span className="text-[11px] font-semibold text-[var(--rl-muted)] uppercase tracking-wider">Logo Lockups</span>
              </div>
              <div className="bg-[var(--rl-chip-bg)] backdrop-blur-2xl border border-[var(--rl-surface-border)] rounded-3xl p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] hover:border-cyan-400/30 transition-all duration-300">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#43ae47]">1</span>
                <span className="text-[11px] font-semibold text-[var(--rl-muted)] uppercase tracking-wider">Unified System</span>
              </div>
            </div>

          </div>

          {/* Right Column: Glass Specimen Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-[var(--rl-chip-bg)] backdrop-blur-2xl border border-[var(--rl-surface-border)] rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] hover:border-cyan-400/30 transition-all duration-300 flex flex-col items-center justify-center text-center group">

              {/* Inner illuminated glass highlight ring */}
              <div className="absolute inset-4 rounded-2xl border border-dashed border-[var(--rl-surface-border)] pointer-events-none group-hover:border-[#27a3ff]/40 transition-colors" />

              {/* Clean Floating Emblem (Inner Square Box Removed Completely!) */}
              <div className="relative z-10 flex items-center justify-center py-6">
                <img
                  src={logoSymbolAsset}
                  alt="RLabZ Emblem"
                  className="w-56 h-56 object-contain filter drop-shadow-[0_20px_40px_rgba(39,163,255,0.4)] transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Floating Glass Chips showing blade breakdown — fixed dark tags, intentionally constant across themes */}
              <div className="absolute top-6 left-6 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 text-[11px] font-medium text-slate-200 flex items-center gap-1.5 shadow-xl backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#27a3ff]" />
                #27a3ff Cyan Blade
              </div>

              <div className="absolute top-6 right-6 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 text-[11px] font-medium text-slate-200 flex items-center gap-1.5 shadow-xl backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#002c49]" />
                #002c49 Core Navy
              </div>

              <div className="absolute bottom-6 right-6 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-white/15 text-[11px] font-medium text-slate-200 flex items-center gap-1.5 shadow-xl backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#43ae47]" />
                #43ae47 Bio Green
              </div>

              <div className="mt-8 text-center">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                  3D Translucent Glass Specimen
                </span>
                <p className="text-[11px] text-[var(--rl-muted)] mt-1 max-w-xs">
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
