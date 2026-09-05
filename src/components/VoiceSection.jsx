import React, { useState } from 'react';
import { MessageSquareText, Flame, ShieldCheck, GraduationCap, Cpu, CheckCircle2, XCircle, Copy } from 'lucide-react';
import { VOICE_PILLARS, BOILERPLATE_COPY, VOICE_DOS_DONTS } from '../data/brandData';

const ICONS = { Flame, ShieldCheck, GraduationCap, Cpu };

export const VoiceSection = ({ onTriggerToast }) => {
  const [copiedLabel, setCopiedLabel] = useState(null);

  const handleCopyText = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(null), 2000);
    if (onTriggerToast) {
      onTriggerToast({
        type: 'copy',
        title: 'Copied to Clipboard',
        message: `${label} copied successfully.`,
      });
    }
  };

  return (
    <section id="voice" className="py-20 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquareText className="w-3.5 h-3.5" />
            <span>Verbal Identity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--rl-heading)]">
            Brand Voice & Tone
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--rl-muted)]">
            How RLabZ sounds in writing — from decks and proposals to emails and social posts.
          </p>
        </div>

        {/* Voice Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {VOICE_PILLARS.map((pillar) => {
            const Icon = ICONS[pillar.iconName] || MessageSquareText;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl p-6 frosted-glass-card transition-all flex flex-col gap-4"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${pillar.color}22`, color: pillar.color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--rl-heading)]">{pillar.title}</h3>
                  <p className="text-xs mt-2 leading-relaxed text-[var(--rl-muted)]">{pillar.description}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-[var(--rl-surface-border)] space-y-2 text-[11px]">
                  <div className="flex items-start gap-1.5 text-[#43ae47]">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span className="text-[var(--rl-body)] italic">{pillar.doExample}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-[#f9440d]">
                    <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span className="text-[var(--rl-faint)] italic">{pillar.dontExample}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Boilerplate Copy Library */}
        <div className="rounded-3xl p-8 frosted-glass-card border border-[var(--rl-surface-border)] mb-16">
          <h3 className="text-xl font-bold text-[var(--rl-heading)] mb-1">Approved Boilerplate Copy</h3>
          <p className="text-xs sm:text-sm text-[var(--rl-muted)] mb-6">
            Pre-written, legal-safe descriptions of RLabZ. Copy the version that fits your context.
          </p>
          <div className="space-y-4">
            {BOILERPLATE_COPY.map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-2xl bg-[var(--rl-chip-bg)] border border-[var(--rl-surface-border)] flex flex-col md:flex-row md:items-start justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-[#27a3ff]/15 text-[#27a3ff] text-[10px] font-bold uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-[var(--rl-faint)]">{item.useCase}</span>
                  </div>
                  <p className="text-sm text-[var(--rl-body)] leading-relaxed">{item.text}</p>
                </div>
                <button
                  onClick={() => handleCopyText(item.text, item.label)}
                  className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 rounded-full btn-glass-secondary text-xs font-bold"
                >
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{copiedLabel === item.label ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Writing Do's & Don'ts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl p-8 frosted-glass-card border border-[#43ae47]/30 shadow-xl">
            <h3 className="text-xl font-extrabold text-[#43ae47] flex items-center gap-2.5 mb-6">
              <CheckCircle2 className="w-6 h-6" />
              <span>Writing Guidelines: DO'S</span>
            </h3>
            <div className="space-y-4">
              {VOICE_DOS_DONTS.dos.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl border bg-[var(--rl-chip-bg)] border-[var(--rl-surface-border)]">
                  <h4 className="text-sm font-bold text-[var(--rl-heading)]">{idx + 1}. {item.title}</h4>
                  <p className="text-xs mt-1 leading-relaxed text-[var(--rl-muted)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl p-8 frosted-glass-card border border-[#f9440d]/30 shadow-xl">
            <h3 className="text-xl font-extrabold text-[#f9440d] flex items-center gap-2.5 mb-6">
              <XCircle className="w-6 h-6" />
              <span>Writing Guidelines: DON'TS</span>
            </h3>
            <div className="space-y-4">
              {VOICE_DOS_DONTS.donts.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl border bg-[var(--rl-chip-bg)] border-[var(--rl-surface-border)]">
                  <h4 className="text-sm font-bold text-[var(--rl-heading)]">{idx + 1}. {item.title}</h4>
                  <p className="text-xs mt-1 leading-relaxed text-[var(--rl-muted)]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VoiceSection;
