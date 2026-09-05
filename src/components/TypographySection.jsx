import React, { useState } from 'react';
import { Type, Sliders } from 'lucide-react';
import { TYPOGRAPHY_SCALES } from '../data/brandData';

export const TypographySection = () => {
  const [sampleText, setSampleText] = useState('RLabZ: Transforming Ideas into Intelligent Solutions');

  return (
    <section id="typography" className="py-20 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#27a3ff]/10 border border-[#27a3ff]/30 text-[#27a3ff] text-xs font-bold uppercase tracking-wider mb-3">
            <Type className="w-3.5 h-3.5" />
            <span>Typography System</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--rl-heading)]">
            Type Hierarchy & Font Specs
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--rl-muted)]">
            Primary Typeface: <strong>Plus Jakarta Sans</strong> paired with <strong>Inter</strong> for UI components.
          </p>
        </div>

        {/* Font Family Overview Card */}
        <div className="rounded-3xl p-8 frosted-glass-card mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

            <div className="md:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#f9440d]">
                Primary Brand Typeface
              </span>
              <h3 className="text-4xl font-extrabold tracking-tight text-[var(--rl-heading)]">
                Plus Jakarta Sans
              </h3>
              <p className="text-sm leading-relaxed text-[var(--rl-muted)]">
                A modern sans-serif designed for high legibility, clean geometric proportions, and enterprise authority. Used across digital portals, marketing banners, and print collateral.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-lg bg-[var(--rl-chip-bg)] text-[var(--rl-body)] text-xs font-semibold border border-[var(--rl-surface-border)]">
                  Regular 400
                </span>
                <span className="px-3 py-1 rounded-lg bg-[var(--rl-chip-bg)] text-[var(--rl-body)] text-xs font-semibold border border-[var(--rl-surface-border)]">
                  Medium 500
                </span>
                <span className="px-3 py-1 rounded-lg bg-[var(--rl-chip-bg)] text-[var(--rl-body)] text-xs font-semibold border border-[var(--rl-surface-border)]">
                  SemiBold 600
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#27a3ff]/20 text-[#27a3ff] text-xs font-bold border border-[#27a3ff]/40">
                  Bold 700
                </span>
                <span className="px-3 py-1 rounded-lg bg-[#f9440d]/20 text-[#f9440d] text-xs font-extrabold border border-[#f9440d]/40">
                  ExtraBold 800
                </span>
              </div>
            </div>

            {/* Interactive Type Tester Input — fixed Navy card, on-brand & legible regardless of portal theme */}
            <div className="md:col-span-6 rounded-2xl p-6 bg-[#002c49] border border-slate-700 text-white flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-[#27a3ff] flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5" />
                  Live Type Tester
                </label>
                <span className="text-[10px] text-slate-400">Type custom text below</span>
              </div>
              <input
                type="text"
                value={sampleText}
                onChange={(e) => setSampleText(e.target.value)}
                placeholder="Type sample text here..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#27a3ff] transition"
              />
              <div className="text-xs text-slate-400 flex justify-between">
                <span>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz</span>
              </div>
            </div>

          </div>
        </div>

        {/* Type Hierarchy Scale Listing */}
        <div className="rounded-3xl p-8 frosted-glass-card">
          <h3 className="text-xl font-bold mb-6 text-[var(--rl-heading)]">
            Type Scale Hierarchy
          </h3>

          <div className="space-y-6">
            {TYPOGRAPHY_SCALES.map((scale, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border bg-[var(--rl-chip-bg)] border-[var(--rl-surface-border)] transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--rl-surface-border)] pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#f9440d]/20 text-[#f9440d] font-mono text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h4 className="text-base font-bold text-[var(--rl-heading)]">
                      {scale.level}
                    </h4>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono text-[var(--rl-muted)]">
                    <span>Size: {scale.size}</span>
                    <span>Weight: {scale.weight}</span>
                  </div>
                </div>

                {/* Rendered Sample */}
                <div
                  className="overflow-x-auto py-2 font-sans tracking-tight text-[var(--rl-heading)]"
                  style={{
                    fontSize: scale.size.split(' / ')[0],
                    fontWeight: scale.weight.includes('800') ? 800 : scale.weight.includes('700') ? 700 : scale.weight.includes('600') ? 600 : 400,
                  }}
                >
                  {sampleText || 'RLabZ Brand Identity'}
                </div>

                <p className="text-xs mt-3 opacity-70 text-[var(--rl-muted)]">
                  <strong>Usage:</strong> {scale.usage}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TypographySection;
