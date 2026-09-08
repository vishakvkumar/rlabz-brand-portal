import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Palette, Type, MessageSquareQuote, FolderDown, ArrowRight } from 'lucide-react';

export const BrandAssetGrid = () => {
  const assetCards = [
    {
      title: 'Logos & Marks',
      subtitle: 'The 4-blade crucible symbol, primary dark & light lockups, clear space, and misuse rules.',
      path: '/logos',
      tag: 'Vector SVGs & 4K PNGs',
      icon: Layers,
      accentColor: '#27a3ff',
      linkText: 'Explore Logos',
      preview: (
        <div className="flex items-center gap-2 py-2">
          <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-mono text-xs font-bold text-white">R</span>
          <span className="text-xs font-bold text-white">RLabZ</span>
          <span className="text-[10px] text-slate-400 font-mono tracking-wider ml-auto">DARK / LIGHT</span>
        </div>
      ),
    },
    {
      title: 'Color Palette',
      subtitle: 'Deep Navy, Electric Cyan, Growth Green, and Crucible Flame tokens with exact RGB and WCAG ratios.',
      path: '/colors',
      tag: '4 Core Tokens + Neutrals',
      icon: Palette,
      accentColor: '#43ae47',
      linkText: 'View Palette',
      preview: (
        <div className="grid grid-cols-4 gap-2 py-2">
          <div className="h-7 rounded-lg bg-[#002c49] border border-white/20" title="#002c49 Core Navy" />
          <div className="h-7 rounded-lg bg-[#27a3ff]" title="#27a3ff Electric Cyan" />
          <div className="h-7 rounded-lg bg-[#43ae47]" title="#43ae47 Growth Green" />
          <div className="h-7 rounded-lg bg-[#f9440d]" title="#f9440d Crucible Flame" />
        </div>
      ),
    },
    {
      title: 'Typography',
      subtitle: 'Coolvetica display heading hierarchy paired with Plus Jakarta Sans and Inter for UI body copy.',
      path: '/typography',
      tag: 'Coolvetica + System Sans',
      icon: Type,
      accentColor: '#27a3ff',
      linkText: 'Explore Typography',
      preview: (
        <div className="flex items-baseline justify-between py-2 border-b border-white/10">
          <span className="text-xl font-bold tracking-tight text-white font-sans">Coolvetica</span>
          <span className="text-xs font-mono text-slate-400">Display 700</span>
        </div>
      ),
    },
    {
      title: 'Voice & Tone',
      subtitle: 'Strategic messaging pillars, editorial principles, audience calibration, and copywriting rules.',
      path: '/voice',
      tag: 'Editorial Guidelines',
      icon: MessageSquareQuote,
      accentColor: '#f9440d',
      linkText: 'Read Guidelines',
      preview: (
        <div className="py-2 text-xs italic text-slate-300 line-clamp-1 border-l-2 border-[#f9440d] pl-2.5">
          “Live client projects, not simulations.”
        </div>
      ),
    },
    {
      title: 'Asset Repository',
      subtitle: 'Downloadable logo kit with authentic high-resolution transparent PNG lockups and official brand guidelines PDF.',
      path: '/downloads',
      tag: 'ZIP, PNG, PDF',
      icon: FolderDown,
      accentColor: '#27a3ff',
      linkText: 'Access Downloads',
      preview: (
        <div className="flex items-center gap-2 py-2 text-xs font-semibold text-slate-300">
          <span className="px-2 py-0.5 rounded bg-white/10 font-mono text-[10px]">.ZIP</span>
          <span>Official Logo Kit (1.0 MB)</span>
        </div>
      ),
    },
  ];

  return (
    <section id="assets-overview" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Intro */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-slate-300 mb-4">
            <span>Brand System Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Our Brand Assets
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
            The foundational elements of the RLabZ brand identity. Built for engineering precision, editorial clarity, and consistent execution across digital and physical touchpoints.
          </p>
        </div>

        {/* 5-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assetCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                to={card.path}
                className="group relative rounded-2xl p-7 bg-white/[0.03] border border-white/10 hover:border-white/25 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-white group-hover:text-[#27a3ff] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#27a3ff] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {card.subtitle}
                  </p>

                  <div className="mt-5 pt-4 border-t border-white/10">
                    {card.preview}
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-[#27a3ff] group-hover:translate-x-1 transition-transform">
                  <span>{card.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BrandAssetGrid;
