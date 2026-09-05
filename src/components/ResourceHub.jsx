import React, { useState } from 'react';
import { Download, Sparkles, FolderDown } from 'lucide-react';
import { ASSET_PACKAGES } from '../data/brandData';

export const ResourceHub = ({ onDownloadBrandKit, onTriggerToast }) => {
  const [downloadingId, setDownloadingId] = useState(null);

  const handleIndividualDownload = (asset) => {
    setDownloadingId(asset.id);

    setTimeout(() => {
      let content = `RLabZ Asset Package: ${asset.title}\nFormat: ${asset.format}\nSize: ${asset.size}\nDescription: ${asset.description}\n\nThank you for downloading from the RLabZ Brand Identity Hub.`;
      let mimeType = 'text/plain';
      let fileExt = 'txt';

      if (asset.format.includes('SVG')) {
        content = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><title>${asset.title}</title><circle cx="100" cy="100" r="80" fill="#002c49"/></svg>`;
        mimeType = 'image/svg+xml';
        fileExt = 'svg';
      }

      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `rlabz-${asset.id}.${fileExt}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setDownloadingId(null);
      onTriggerToast({
        type: 'download',
        title: 'Download Started',
        message: `Downloaded ${asset.title} successfully.`,
      });
    }, 800);
  };

  return (
    <section id="downloads" className="py-20 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <FolderDown className="w-3.5 h-3.5" />
            <span>Downloads & Resources</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Brand Assets & Template Repository
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Official design vectors, 4K PNG renders, presentation decks, print specs, and guideline documents.
          </p>
        </div>

        {/* Master Zip Callout Card */}
        <div className="rounded-3xl p-8 sm:p-10 mb-14 glass-pedestal text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 max-w-xl z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#43ae47]/20 text-[#43ae47] border border-[#43ae47]/40 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complete Package</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Download Full RLabZ Brand Kit (.ZIP)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Includes all SVG vector lockups, PNG 4K renders, EPS print files, color palette JSON, slide deck templates, and brand guidelines in a single archive.
            </p>
          </div>

          <button
            onClick={onDownloadBrandKit}
            className="z-10 shrink-0 btn-glass-primary flex items-center gap-3 px-8 py-4 rounded-full text-xs font-extrabold shadow-2xl"
          >
            <Download className="w-5 h-5" />
            <span>Download All Assets (.ZIP)</span>
          </button>
        </div>

        {/* Assets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ASSET_PACKAGES.map((asset) => (
            <div
              key={asset.id}
              className="rounded-2xl p-6 frosted-glass-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-cyan-300 text-[11px] font-bold uppercase tracking-wider">
                    {asset.type}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{asset.size}</span>
                </div>

                <h4 className="text-lg font-bold text-white">
                  {asset.title}
                </h4>

                <p className="text-xs mt-2 leading-relaxed text-slate-400">
                  {asset.description}
                </p>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Formats: <strong className="text-slate-200">{asset.format}</strong></span>
                  <span>{asset.updated}</span>
                </div>
              </div>

              <div className="mt-6 pt-4">
                <button
                  onClick={() => handleIndividualDownload(asset)}
                  disabled={downloadingId === asset.id}
                  className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-full font-bold text-xs transition border ${
                    downloadingId === asset.id
                      ? 'bg-slate-800 text-slate-500 border-slate-700 cursor-not-allowed'
                      : 'btn-glass-secondary'
                  }`}
                >
                  {downloadingId === asset.id ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Download Package</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResourceHub;
