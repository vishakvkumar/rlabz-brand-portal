import React, { useState } from 'react';
import { Copy, Palette, Sparkles, Shield } from 'lucide-react';
import { BRAND_COLORS } from '../data/brandData';

// Relative-luminance check so swatch overlay text stays readable on any hex,
// not just the two light colors this used to special-case.
const isLightColor = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.65;
};

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
    '#f9440d': { displayTitle: 'Catalyst Orange', role: 'Rare Highlight — Use Sparingly' },
  };

  const primaryColors = BRAND_COLORS.filter((c) => c.category === 'primary');
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
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--rl-heading)]">
            Color Tokens & Swatches
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--rl-muted)]">
            Sourced directly from the official RLabZ deck, letterhead, and email signature — the 4 core logo colors plus the neutral scale actually used across approved collateral.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4.5 py-2 rounded-full text-xs font-bold transition border ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-[#27a3ff] to-[#43ae47] text-white border-transparent shadow-lg'
                : 'bg-[var(--rl-chip-bg)] border-[var(--rl-surface-border)] text-[var(--rl-muted)] hover:bg-[var(--rl-surface-hover)]'
            }`}
          >
            All Swatches ({BRAND_COLORS.length})
          </button>
          <button
            onClick={() => setActiveCategory('primary')}
            className={`px-4.5 py-2 rounded-full text-xs font-bold transition border ${
              activeCategory === 'primary'
                ? 'bg-gradient-to-r from-[#27a3ff] to-[#43ae47] text-white border-transparent shadow-lg'
                : 'bg-[var(--rl-chip-bg)] border-[var(--rl-surface-border)] text-[var(--rl-muted)] hover:bg-[var(--rl-surface-hover)]'
            }`}
          >
            Core Logo Palette ({primaryColors.length})
          </button>
          <button
            onClick={() => setActiveCategory('neutral')}
            className={`px-4.5 py-2 rounded-full text-xs font-bold transition border ${
              activeCategory === 'neutral'
                ? 'bg-gradient-to-r from-[#27a3ff] to-[#43ae47] text-white border-transparent shadow-lg'
                : 'bg-[var(--rl-chip-bg)] border-[var(--rl-surface-border)] text-[var(--rl-muted)] hover:bg-[var(--rl-surface-hover)]'
            }`}
          >
            Neutral & Surface ({neutralColors.length})
          </button>
        </div>

        {/* 1. Core Primary Palette (4 Large Frosted Cards) */}
        {(activeCategory === 'all' || activeCategory === 'primary') && (
          <div className="mb-14">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[var(--rl-heading)]">
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
                        <p className="text-xs mt-1 leading-relaxed text-[var(--rl-muted)]">
                          {color.usage}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[var(--rl-surface-border)] grid grid-cols-2 gap-2 text-[11px] font-mono text-[var(--rl-muted)]">
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

        {/* 2. Neutral & Surface Palette */}
        {(activeCategory === 'all' || activeCategory === 'neutral') && (
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[var(--rl-heading)]">
              <Shield className="w-5 h-5 text-[#43ae47]" />
              Neutral & Surface Tokens
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {neutralColors.map((color) => {
                const onLight = isLightColor(color.hex);
                return (
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
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${onLight ? 'text-slate-800 bg-slate-200' : 'text-white bg-black/40'}`}>
                          {color.name}
                        </span>
                        <Copy className={`w-3.5 h-3.5 ${onLight ? 'text-slate-700' : 'text-white'}`} />
                      </div>
                      <span className={`font-mono text-base font-extrabold ${onLight ? 'text-slate-900' : 'text-white'}`}>
                        {color.hex}
                      </span>
                    </div>

                    <div className="p-4">
                      <span className="text-[10px] font-semibold text-cyan-300 uppercase tracking-wider">{color.role}</span>
                      <p className="text-xs mt-1 text-[var(--rl-muted)]">{color.usage}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default ColorPalette;
