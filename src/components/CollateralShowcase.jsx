import React, { useState } from 'react';
import { CreditCard, BadgeCheck, Presentation, Mail, RotateCw, User, Phone, Globe, MapPin } from 'lucide-react';
import CrucibleLogo, { CrucibleMark } from './CrucibleLogo';

export const CollateralShowcase = () => {
  const [activeTab, setActiveTab] = useState('business-card');
  const [cardFlipped, setCardFlipped] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <section id="mockups" className="py-20 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Presentation className="w-3.5 h-3.5" />
            <span>Applications & Brand in Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--rl-heading)]">
            Collateral & UI Mockups
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--rl-muted)]">
            Real-world enterprise applications of the RLabZ visual identity system.
          </p>
        </div>

        {/* Mockup Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('business-card')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
              activeTab === 'business-card'
                ? 'bg-gradient-to-r from-[#27a3ff] to-[#43ae47] text-white border-transparent shadow-lg'
                : 'bg-[var(--rl-chip-bg)] border-[var(--rl-surface-border)] text-[var(--rl-muted)] hover:bg-[var(--rl-surface-hover)]'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            <span>1. Business Card (3D Flip)</span>
          </button>

          <button
            onClick={() => setActiveTab('id-badge')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
              activeTab === 'id-badge'
                ? 'bg-gradient-to-r from-[#27a3ff] to-[#43ae47] text-white border-transparent shadow-lg'
                : 'bg-[var(--rl-chip-bg)] border-[var(--rl-surface-border)] text-[var(--rl-muted)] hover:bg-[var(--rl-surface-hover)]'
            }`}
          >
            <BadgeCheck className="w-4 h-4" />
            <span>2. Employee ID Pass</span>
          </button>

          <button
            onClick={() => setActiveTab('slide-deck')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
              activeTab === 'slide-deck'
                ? 'bg-gradient-to-r from-[#27a3ff] to-[#43ae47] text-white border-transparent shadow-lg'
                : 'bg-[var(--rl-chip-bg)] border-[var(--rl-surface-border)] text-[var(--rl-muted)] hover:bg-[var(--rl-surface-hover)]'
            }`}
          >
            <Presentation className="w-4 h-4" />
            <span>3. 16:9 Slide Deck Template</span>
          </button>

          <button
            onClick={() => setActiveTab('email-signature')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
              activeTab === 'email-signature'
                ? 'bg-gradient-to-r from-[#27a3ff] to-[#43ae47] text-white border-transparent shadow-lg'
                : 'bg-[var(--rl-chip-bg)] border-[var(--rl-surface-border)] text-[var(--rl-muted)] hover:bg-[var(--rl-surface-hover)]'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>4. Email Signature</span>
          </button>
        </div>

        {/* TAB 1: Business Card Preview (Interactive 3D Flip) */}
        {activeTab === 'business-card' && (
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCardFlipped(!cardFlipped)}
                className="btn-glass-secondary flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold shadow-md"
              >
                <RotateCw className="w-4 h-4" />
                <span>Flip Business Card ({cardFlipped ? 'Back View' : 'Front View'})</span>
              </button>
            </div>

            {/* Business Card Container */}
            <div className="w-full max-w-lg h-72 perspective-1000">
              <div
                className={`relative w-full h-full duration-700 transform-style-3d transition-transform cursor-pointer ${
                  cardFlipped ? 'rotate-y-180' : ''
                }`}
                onClick={() => setCardFlipped(!cardFlipped)}
              >
                {/* FRONT FACE: Clean Light Front */}
                <div className="absolute inset-0 w-full h-full rounded-2xl bg-white text-[#002c49] p-8 shadow-2xl border border-slate-200 flex flex-col justify-between backface-hidden overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#27a3ff]/10 to-transparent rounded-bl-full pointer-events-none" />

                  <div className="flex items-center justify-between z-10">
                    <CrucibleLogo variant="light" size={36} />
                    <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                      Official ID
                    </span>
                  </div>

                  <div className="z-10 mt-4">
                    <h3 className="text-2xl font-extrabold text-[#002c49] tracking-tight">
                      Jordan Cole
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#f9440d]">
                      Head of Partnerships
                    </p>
                  </div>

                  <div className="z-10 grid grid-cols-2 gap-2 text-[11px] text-slate-600 border-t border-slate-200 pt-3">
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#27a3ff]" />
                      <span>jordan.cole@rlabz.com</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#43ae47]" />
                      <span>+1 (555) 019-8234</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Globe className="w-3.5 h-3.5 text-[#f9440d]" />
                      <span>www.rlabz.com</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>Silicon Valley, CA</span>
                    </div>
                  </div>
                </div>

                {/* BACK FACE: Dark Reflective Card with Glowing Emblem Watermark */}
                <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-[#002c49] to-[#030d18] text-white p-8 shadow-2xl border border-white/20 flex flex-col items-center justify-center rotate-y-180 backface-hidden overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none scale-150">
                    <CrucibleMark size={320} />
                  </div>

                  <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                    <CrucibleMark size={70} />
                    <span className="text-xl font-extrabold tracking-tight text-white">RLabZ</span>
                    <span className="text-[11px] font-semibold tracking-widest text-[#27a3ff] uppercase">
                      Design | Development | Training
                    </span>
                    <p className="text-[10px] text-slate-400 max-w-xs mt-2">
                      Transforming raw potential through real client projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-[var(--rl-muted)]">Click card or button to toggle front / back view.</p>
          </div>
        )}

        {/* TAB 2: Employee ID Badge Preview */}
        {activeTab === 'id-badge' && (
          <div className="flex flex-col items-center justify-center space-y-4">
            {/* Fixed dark badge surface — depicts a literal printed ID badge, not portal chrome */}
            <div className="relative w-72 rounded-3xl bg-[#03101c] border border-white/12 p-6 shadow-2xl text-white flex flex-col items-center">
              {/* Translucent Lanyard Overlay */}
              <div className="w-12 h-3.5 rounded-full bg-white/10 border border-white/20 mb-6 flex items-center justify-center">
                <div className="w-6 h-1 rounded-full bg-cyan-400/60" />
              </div>

              <CrucibleLogo variant="dark" size={32} />
              <div className="h-0.5 w-full bg-gradient-to-r from-[#27a3ff] via-[#43ae47] to-[#f9440d] my-4" />

              <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-2 border-[#27a3ff] bg-slate-900 flex items-center justify-center shadow-lg my-2">
                <User className="w-16 h-16 text-slate-500" />
                <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-[#43ae47] text-[9px] font-bold text-white uppercase">
                  Active
                </span>
              </div>

              <div className="text-center mt-3">
                <h4 className="text-lg font-extrabold text-white">Maya Lin</h4>
                <p className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                  Data Analyst
                </p>
                <span className="text-[10px] text-slate-400 font-mono block mt-1">ID: RLABZ-2026-8849</span>
              </div>

              <div className="w-full mt-6 pt-4 border-t border-white/10 flex flex-col items-center space-y-2">
                <div className="w-full h-8 bg-slate-200 rounded px-2 flex items-center justify-around">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-black"
                      style={{ width: `${(i % 3) + 1}px`, height: '70%' }}
                    />
                  ))}
                </div>
                <span className="text-[9px] font-mono text-slate-400 tracking-widest">
                  AUTHORIZE ACCESS ONLY
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: 16:9 Marketing Slide Preview */}
        {activeTab === 'slide-deck' && (
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[var(--rl-muted)] mr-2">Slide Layout:</span>
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  onClick={() => setActiveSlide(num)}
                  className={`px-3.5 py-1 rounded-full text-xs font-bold transition ${
                    activeSlide === num
                      ? 'bg-gradient-to-r from-[#27a3ff] to-[#43ae47] text-white'
                      : 'bg-[var(--rl-chip-bg)] text-[var(--rl-muted)] hover:bg-[var(--rl-surface-hover)]'
                  }`}
                >
                  Slide {num}
                </button>
              ))}
            </div>

            {/* Fixed dark navy slide surface — depicts a literal dark title slide from the official deck, not portal chrome */}
            <div className="w-full max-w-4xl aspect-video rounded-3xl bg-[#03101c] border border-white/12 p-8 sm:p-12 flex flex-col justify-between text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 opacity-15 pointer-events-none">
                <CrucibleMark size={400} />
              </div>

              <div className="flex items-center justify-between z-10">
                <CrucibleLogo variant="dark" size={38} />
                <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/15 text-[11px] font-semibold text-cyan-300">
                  Enterprise Pitch Deck Template
                </span>
              </div>

              <div className="z-10 max-w-2xl my-auto">
                {activeSlide === 1 && (
                  <div className="space-y-4">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#f9440d]">
                      Official Presentation Template
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-extrabold leading-tight">
                      Custom digital solutions built for modern enterprises
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      Transforming operational workflows through live heat & pressure engineering. Built by battle-tested RLabZ teams.
                    </p>
                  </div>
                )}

                {activeSlide === 2 && (
                  <div className="space-y-4">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-300">
                      Technical Architecture
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold">
                      Unified Design & Development Ecosystem
                    </h3>
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
                        <strong className="text-[#27a3ff] block mb-1">Micro-frontends</strong>
                        Modular UI components built with React & Tailwind CSS.
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
                        <strong className="text-[#43ae47] block mb-1">Cloud Native</strong>
                        Scalable microservices architecture with 99.99% uptime guarantee.
                      </div>
                    </div>
                  </div>
                )}

                {activeSlide === 3 && (
                  <div className="space-y-4">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#43ae47]">
                      Impact & Metrics
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold">
                      Proved Performance in Real Client Environments
                    </h3>
                    <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <span className="text-2xl font-extrabold text-[#f9440d]">100%</span>
                        <span className="text-[10px] block text-slate-400 uppercase">Live Projects</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <span className="text-2xl font-extrabold text-[#27a3ff]">4.9/5</span>
                        <span className="text-[10px] block text-slate-400 uppercase">Client Rating</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                        <span className="text-2xl font-extrabold text-[#43ae47]">95%+</span>
                        <span className="text-[10px] block text-slate-400 uppercase">Job Readiness</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-4 z-10">
                <span>Confidential - RLabZ Internal Brand Hub</span>
                <span>Slide {activeSlide} of 3</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: Email Signature Mockup */}
        {activeTab === 'email-signature' && (
          <div className="flex justify-center">
            <div className="w-full max-w-2xl rounded-2xl p-6 bg-white border border-slate-200 shadow-xl text-slate-800">
              <div className="text-xs text-slate-400 border-b border-slate-200 pb-3 mb-4">
                <strong>Subject:</strong> RLabZ Enterprise Brand Identity Guidelines
              </div>
              <p className="text-sm text-slate-600 mb-6">
                Hi Team,<br /><br />
                Attached are the updated brand assets for our upcoming product release. Please follow the guidelines in the RLabZ Brand Identity Hub.
              </p>

              {/* EMAIL SIGNATURE BLOCK */}
              <div className="pt-4 border-t-2 border-[#002c49] flex items-center gap-6">
                <CrucibleLogo variant="light" size={48} />
                <div className="border-l border-slate-300 pl-6 space-y-1">
                  <h4 className="text-base font-bold text-[#002c49]">Jordan Cole</h4>
                  <p className="text-xs font-semibold text-[#f9440d] uppercase tracking-wider">
                    Head of Partnerships | RLabZ
                  </p>
                  <div className="text-xs text-slate-500 space-y-0.5">
                    <p>Direct: +1 (555) 019-8234 | Web: rlabz.com</p>
                    <p className="text-[#27a3ff] font-medium">Design | Development | Training</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default CollateralShowcase;
