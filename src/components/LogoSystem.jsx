import React, { useState } from 'react';
import { Download, CheckCircle2, XCircle, Layers, Eye, Maximize2, FileImage } from 'lucide-react';
import CrucibleLogo, { CrucibleMark } from './CrucibleLogo';
import { BRAND_DOS_DONTS } from '../data/brandData';
import logoDarkAsset from '../assets/logo-dark.png';
import logoLightAsset from '../assets/logo-light.png';
import logoSymbolAsset from '../assets/logo-symbol.png';

export const LogoSystem = ({ onTriggerToast }) => {
  const [showClearSpace, setShowClearSpace] = useState(true);

  // Download exact PNG image
  const handleDownloadPNG = (assetPath, filename) => {
    const link = document.createElement('a');
    link.href = assetPath;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onTriggerToast({
      type: 'download',
      title: 'PNG Exported',
      message: `Downloaded ${filename} successfully.`,
    });
  };

  // Download scalable SVG file
  const handleDownloadSVG = (variant, filename) => {
    let svgContent = '';
    if (variant === 'symbol') {
      svgContent = `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blade1Grad" x1="20%" y1="10%" x2="90%" y2="90%">
            <stop offset="0%" stop-color="#27a3ff" />
            <stop offset="50%" stop-color="#0064a3" />
            <stop offset="100%" stop-color="#002c49" />
          </linearGradient>
          <linearGradient id="blade4Grad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stop-color="#43ae47" />
            <stop offset="60%" stop-color="#2cb5a8" />
            <stop offset="100%" stop-color="#27a3ff" />
          </linearGradient>
        </defs>
        <path d="M 72 26 C 98 26 132 46 142 82 C 145 92 138 98 128 92 C 104 78 78 72 52 82 C 45 85 38 78 44 71 C 52 50 60 36 72 26 Z" fill="url(#blade1Grad)" />
        <path d="M 50 88 C 76 78 114 82 152 108 C 158 112 154 120 144 118 C 120 114 94 116 66 128 C 58 131 52 124 56 117 C 54 105 51 96 50 88 Z" fill="#002c49" />
        <path d="M 64 132 C 88 122 126 122 166 142 C 172 145 167 154 158 152 C 136 147 110 148 84 158 C 77 161 71 154 75 147 C 72 141 68 136 64 132 Z" fill="#43ae47" />
        <path d="M 80 162 C 102 154 138 153 176 168 C 182 170 178 178 170 177 C 150 174 126 174 100 182 C 93 184 87 178 91 172 C 87 168 83 165 80 162 Z" fill="url(#blade4Grad)" />
      </svg>`;
    } else {
      const textColor = variant === 'dark' ? '#ffffff' : '#002c49';
      const subtextColor = variant === 'dark' ? '#27a3ff' : '#002c49';
      svgContent = `<svg width="450" height="120" viewBox="0 0 450 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="b1" x1="20%" y1="10%" x2="90%" y2="90%">
            <stop offset="0%" stop-color="#27a3ff" />
            <stop offset="50%" stop-color="#0064a3" />
            <stop offset="100%" stop-color="#002c49" />
          </linearGradient>
          <linearGradient id="b4" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stop-color="#43ae47" />
            <stop offset="60%" stop-color="#2cb5a8" />
            <stop offset="100%" stop-color="#27a3ff" />
          </linearGradient>
        </defs>
        <g transform="translate(10, 10) scale(0.5)">
          <path d="M 72 26 C 98 26 132 46 142 82 C 145 92 138 98 128 92 C 104 78 78 72 52 82 C 45 85 38 78 44 71 C 52 50 60 36 72 26 Z" fill="url(#b1)" />
          <path d="M 50 88 C 76 78 114 82 152 108 C 158 112 154 120 144 118 C 120 114 94 116 66 128 C 58 131 52 124 56 117 C 54 105 51 96 50 88 Z" fill="#002c49" />
          <path d="M 64 132 C 88 122 126 122 166 142 C 172 145 167 154 158 152 C 136 147 110 148 84 158 C 77 161 71 154 75 147 C 72 141 68 136 64 132 Z" fill="#43ae47" />
          <path d="M 80 162 C 102 154 138 153 176 168 C 182 170 178 178 170 177 C 150 174 126 174 100 182 C 93 184 87 178 91 172 C 87 168 83 165 80 162 Z" fill="url(#b4)" />
        </g>
        <text x="135" y="65" font-family="system-ui, sans-serif" font-weight="800" font-size="44" fill="${textColor}">RLabZ</text>
        <text x="135" y="92" font-family="system-ui, sans-serif" font-weight="600" font-size="12" letter-spacing="1.5" fill="${subtextColor}">DESIGN | DEVELOPMENT | TRAINING</text>
      </svg>`;
    }

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    onTriggerToast({
      type: 'download',
      title: 'SVG Exported',
      message: `Downloaded ${filename} vector.`,
    });
  };

  return (
    <section id="logos" className="py-20 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Official Identity Assets</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Official RLabZ Logo Lockups
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Rendered directly from the official attached high-resolution logo assets at prominent size.
          </p>
        </div>

        {/* 3 Logo Variation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Dark Theme Lockup */}
          <div className="group rounded-3xl overflow-hidden frosted-glass-card border border-white/15 flex flex-col justify-between transition-all hover:border-[#27a3ff]/60">
            <div className="p-8 h-64 flex flex-col items-center justify-center relative">
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 text-[11px] font-bold text-cyan-300 uppercase tracking-wider border border-white/10">
                01. Dark Surface Lockup
              </div>
              <CrucibleLogo variant="dark" size={76} />
            </div>
            <div className="p-5 bg-black/40 border-t border-white/10 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white">Dark Lockup</h4>
                <p className="text-xs text-slate-400">White text for #002c49 / dark UI</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDownloadPNG(logoDarkAsset, 'rlabz-logo-dark.png')}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#27a3ff]/20 hover:bg-[#27a3ff] text-[#27a3ff] hover:text-white text-xs font-bold transition border border-[#27a3ff]/30"
                >
                  <FileImage className="w-3.5 h-3.5" />
                  <span>PNG</span>
                </button>
                <button
                  onClick={() => handleDownloadSVG('dark', 'rlabz-logo-dark.svg')}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold border border-white/15 transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>SVG</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Light Theme Lockup */}
          <div className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl flex flex-col justify-between transition-all hover:border-[#002c49]">
            <div className="p-8 h-64 flex flex-col items-center justify-center relative">
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-100 text-[11px] font-bold text-[#002c49] uppercase tracking-wider border border-slate-300">
                02. Light Surface Lockup
              </div>
              <CrucibleLogo variant="light" size={76} />
            </div>
            <div className="p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-[#002c49]">Light Lockup</h4>
                <p className="text-xs text-slate-500">Navy #002c49 text for paper</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDownloadPNG(logoLightAsset, 'rlabz-logo-light.png')}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#002c49]/10 hover:bg-[#002c49] text-[#002c49] hover:text-white text-xs font-bold transition border border-[#002c49]/20"
                >
                  <FileImage className="w-3.5 h-3.5" />
                  <span>PNG</span>
                </button>
                <button
                  onClick={() => handleDownloadSVG('light', 'rlabz-logo-light.svg')}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-300 transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>SVG</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Standalone Symbol */}
          <div className="group rounded-3xl overflow-hidden frosted-glass-card border border-white/15 flex flex-col justify-between transition-all hover:border-[#43ae47]/60">
            <div className="p-8 h-64 flex flex-col items-center justify-center relative">
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/40 text-[11px] font-bold text-cyan-300 uppercase tracking-wider border border-white/10">
                03. Standalone Emblem
              </div>
              <CrucibleMark size={108} />
            </div>
            <div className="p-5 bg-black/40 border-t border-white/10 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white">4-Blade Emblem</h4>
                <p className="text-xs text-slate-400">App icon, avatar & watermark</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDownloadPNG(logoSymbolAsset, 'rlabz-crucible-emblem.png')}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#43ae47]/20 hover:bg-[#43ae47] text-[#43ae47] hover:text-white text-xs font-bold transition border border-[#43ae47]/30"
                >
                  <FileImage className="w-3.5 h-3.5" />
                  <span>PNG</span>
                </button>
                <button
                  onClick={() => handleDownloadSVG('symbol', 'rlabz-crucible-emblem.svg')}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-semibold border border-white/15 transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>SVG</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Clear Space Visualizer Section */}
        <div className="rounded-3xl p-8 frosted-glass-card border border-white/15 mb-16 transition-all">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300 mb-1">
                <Maximize2 className="w-4 h-4" />
                <span>Exclusion Safety Zone</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Logo Clear Space & Minimum Scale
              </h3>
              <p className="text-xs sm:text-sm mt-1 text-slate-400">
                Maintain clear space around the emblem equal to at least 1.0x height of the capital letter "R".
              </p>
            </div>

            <button
              onClick={() => setShowClearSpace(!showClearSpace)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition border ${
                showClearSpace
                  ? 'bg-gradient-to-r from-[#27a3ff] to-[#43ae47] text-white border-transparent'
                  : 'bg-white/10 text-slate-300 border-white/15'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>{showClearSpace ? 'Hide Clear Space Grid' : 'Show Clear Space Grid'}</span>
            </button>
          </div>

          {/* Diagram Container */}
          <div className="flex flex-col items-center justify-center p-10 rounded-2xl bg-black/40 border border-white/15 relative overflow-hidden">
            {showClearSpace && (
              <div className="absolute inset-8 border-2 border-dashed border-[#27a3ff]/60 rounded-xl pointer-events-none flex items-center justify-between px-2 py-2">
                <span className="text-[10px] font-mono text-[#27a3ff] bg-slate-900/90 px-1.5 py-0.5 rounded">Clear Zone = 1R</span>
                <span className="text-[10px] font-mono text-[#27a3ff] bg-slate-900/90 px-1.5 py-0.5 rounded">Clear Zone = 1R</span>
              </div>
            )}

            <div className="relative py-8 px-12 z-10">
              <CrucibleLogo variant="dark" size={80} />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 border-t border-white/10 pt-4 w-full">
              <span><strong>Digital Min Width:</strong> 140px</span>
              <span><strong>Print Min Width:</strong> 1.5 inches (38mm)</span>
              <span><strong>Favicon Min Size:</strong> 32px x 32px</span>
            </div>
          </div>
        </div>

        {/* Brand Rules: Do's & Don'ts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Do's Column */}
          <div className="rounded-3xl p-8 frosted-glass-card border border-[#43ae47]/30 shadow-xl">
            <h3 className="text-xl font-extrabold text-[#43ae47] flex items-center gap-2.5 mb-6">
              <CheckCircle2 className="w-6 h-6" />
              <span>Brand Guidelines: DO’S</span>
            </h3>
            <div className="space-y-4">
              {BRAND_DOS_DONTS.dos.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl border bg-black/30 border-white/10 transition">
                  <h4 className="text-sm font-bold text-white">
                    {idx + 1}. {item.title}
                  </h4>
                  <p className="text-xs mt-1 leading-relaxed text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Don'ts Column */}
          <div className="rounded-3xl p-8 frosted-glass-card border border-[#f9440d]/30 shadow-xl">
            <h3 className="text-xl font-extrabold text-[#f9440d] flex items-center gap-2.5 mb-6">
              <XCircle className="w-6 h-6" />
              <span>Brand Guidelines: DON’TS</span>
            </h3>
            <div className="space-y-4">
              {BRAND_DOS_DONTS.donts.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl border bg-black/30 border-white/10 transition">
                  <h4 className="text-sm font-bold text-white">
                    {idx + 1}. {item.title}
                  </h4>
                  <p className="text-xs mt-1 leading-relaxed text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LogoSystem;
