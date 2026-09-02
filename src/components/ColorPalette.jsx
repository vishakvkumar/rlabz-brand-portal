import React, { useState } from 'react';
import { Copy, Palette, Sparkles, Shield } from 'lucide-react';
import { BRAND_COLORS } from '../data/brandData';

export const ColorPalette = ({ onTriggerToast }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCopyColor = (hex, name) => {
    navigator.clipboard.writeText(hex);
    onTriggerToast({
      type: 'copy',
      title: 'Color Copied!',
      message: `Copied ${name} (${hex}) to clipboard.`,
    });
  };

  // Custom display mapping matching prompt specs
  const displayMap = {
    '#002c49': { displayTitle: 'Crucible Core', role: 'Dominant Identity Base' },
    '#27a3ff': { displayTitle: 'Digital Flow', role: 'Interactive Tech Accent' },
    '#43ae47': { displayTitle: 'Transformation', role: 'Growth & Status Accent' },
    '#f9440d': { displayTitle: 'Catalyst Orange', role: 'Refined Micro Accent' },
  };

  const primaryColors = BRAND_COLORS.filter((c) => c.category === 'primary');
  const professionalColors = BRAND_COLORS.filter((c) => c.category === 'professional');
  const neutralColors = BRAND_COLORS.filter((c) => c.category === 'neutral');

  return (
    <section id="colors" className="py-20 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Palette className="w-3.5 h-3.5" />
            <span>Exact Design Tokens</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Color Tokens & Swatches
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Featuring the 4 primary logo colors (#002c49, #27a3ff, #43ae47, #f9440d) and professional enterprise neutrals.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4.5 py-2 rounded-full text-xs font-bold transition border ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-[#27a3ff] to-[#43ae47] text-white border-transparent shadow-lg'
                : 'bg-white/[0.04] border-white/10 text-slate-300 hover:bg-white/10'
            }`}
          >
            All Swatches ({BRAND_COLORS.length})
          </button>
          <button
            onClick={() => setActiveCategory('primary')}
            className={`px-4.5 py-2 rounded-full text-xs font-bold transition border ${
              activeCategory === 'primary'
                ? 'bg-gradient-to-r from-[#27a3ff] to-[#43ae47] text-white border-transparent shadow-lg'
                : 'bg-white/[0.04] border-white/10 text-slate-300 hover:bg-white/10'
            }`}
          >
            Core Logo Palette (4)
          </button>
          <button
            onClick={() => setActiveCategory('professional')}
            className={`px-4.5 py-2 rounded-full text-xs font-bold transition border ${
              activeCategory === 'professional'
                ? 'bg-gradient-to-r from-[#27a3ff] to-[#43ae47] text-white border-transparent shadow-lg'
                : 'bg-white/[0.04] border-white/10 text-slate-300 hover:bg-white/10'
            }`}
          >
            Professional Corporate (4)
          </button>
          <button
            onClick={() => setActiveCategory('neutral')}
            className={`px-4.5 py-2 rounded-full text-xs font-bold transition border ${
              activeCategory === 'neutral'
                ? 'bg-gradient-to-r from-[#27a3ff] to-[#43ae47] text-white border-transparent shadow-lg'
                : 'bg-white/[0.04] border-white/10 text-slate-300 hover:bg-white/10'
            }`}
          >
            Neutrals (3)
          </button>
        </div>

        {/* 1. Core Primary Palette (4 Large Frosted Cards) */}
        {(activeCategory === 'all' || activeCategory === 'primary') && (
          <div className="mb-14">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
              <Sparkles className="w-5 h-5 text-[#27a3ff]" />
              Core Logo Color Tokens
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {primaryColors.map((color) => {
                const spec = displayMap[color.hex] || { displayTitle: color.name, role: color.role };
                return (
                  <div
                    key={color.hex}
                    onClick={() => handleCopyColor(color.hex, spec.displayTitle)}
                    className="group cursor-pointer rounded-2xl frosted-glass-card transition-all transform hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
                  >
                    <div
                      className="h-44 w-full p-5 flex flex-col justify-between relative overflow-hidden transition-transform group-hover:scale-[1.02]"
                      style={{ backgroundColor: color.hex }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md text-[11px] font-bold text-white uppercase tracking-wider">
                          {spec.displayTitle}
                        </span>
                        <button className="p-2 rounded-xl bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition">
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-baseline justify-between text-white font-mono text-xl font-extrabold tracking-wider drop-shadow-md">
                        <span>{color.hex}</span>
                        <span className="text-xs font-normal opacity-80">Copy Code</span>
                      </div>
                    </div>

                    <div className="p-5 flex flex-col gap-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                          {spec.role}
                        </span>
                        <p className="text-xs mt-1 leading-relaxed text-slate-400">
                          {color.usage}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400">
                        <div>
                          <span className="block text-[9px] uppercase tracking-wider opacity-60">RGB</span>
                          {color.rgb}
                        </div>
                        <div>
                          <span className="block text-[9px] uppercase tracking-wider opacity-60">Contrast</span>
                          {color.contrastOnWhite}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. Professional Corporate Colors */}
        {(activeCategory === 'all' || activeCategory === 'professional') && (
          <div className="mb-14">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
              <Shield className="w-5 h-5 text-[#43ae47]" />
              Professional Corporate & Enterprise Palette
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {professionalColors.map((color) => (
                <div
                  key={color.hex}
                  onClick={() => handleCopyColor(color.hex, color.name)}
                  className="group cursor-pointer rounded-2xl frosted-glass-card transition-all transform hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
                >
                  <div
                    className="h-36 w-full p-4 flex flex-col justify-between relative overflow-hidden"
                    style={{ backgroundColor: color.hex }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/35 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                        {color.name}
                      </span>
                      <Copy className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="font-mono text-lg font-extrabold text-white">{color.hex}</span>
                  </div>

                  <div className="p-4 flex flex-col gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                      {color.role}
                    </span>
                    <p className="text-xs leading-relaxed text-slate-400">
                      {color.usage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Neutrals Palette */}
        {(activeCategory === 'all' || activeCategory === 'neutral') && (
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">
              Neutral Canvas Tokens
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {neutralColors.map((color) => (
                <div
                  key={color.hex}
                  onClick={() => handleCopyColor(color.hex, color.name)}
                  className="group cursor-pointer rounded-2xl frosted-glass-card transition-all transform hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
                >
                  <div
                    className="h-32 w-full p-4 flex flex-col justify-between relative border-b border-white/10"
                    style={{ backgroundColor: color.hex }}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${color.hex === '#FFFFFF' || color.hex === '#F8FAFC' ? 'text-slate-800 bg-slate-200' : 'text-white bg-black/40'}`}>
                        {color.name}
                      </span>
                      <Copy className={`w-3.5 h-3.5 ${color.hex === '#FFFFFF' || color.hex === '#F8FAFC' ? 'text-slate-700' : 'text-white'}`} />
                    </div>
                    <span className={`font-mono text-base font-extrabold ${color.hex === '#FFFFFF' || color.hex === '#F8FAFC' ? 'text-slate-900' : 'text-white'}`}>
                      {color.hex}
                    </span>
                  </div>

                  <div className="p-4">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{color.role}</span>
                    <p className="text-xs mt-1 text-slate-400">{color.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ColorPalette;
