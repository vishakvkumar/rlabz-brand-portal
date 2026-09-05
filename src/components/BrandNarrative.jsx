import React from 'react';
import { Flame, Cpu, GraduationCap, Compass } from 'lucide-react';
import { CrucibleLogo } from './CrucibleLogo';

export const BrandNarrative = () => {
  return (
    <section id="story" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-[#f9440d]" />
            <span>Brand Narrative & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--rl-heading)]">
            The Brand Story
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--rl-muted)]">
            Why the 4-blade crucible emblem represents RLabZ’s core transformational mission.
          </p>
        </div>

        {/* Full-width Frosted Glass Card with Left Vertical Glowing Bar */}
        <div className="relative rounded-3xl p-8 sm:p-12 frosted-glass-card overflow-hidden">

          {/* Left Vertical Glowing Bar */}
          <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-[#27a3ff] via-[#43ae47] to-[#f9440d] shadow-[0_0_20px_rgba(39,163,255,0.6)]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pl-4 sm:pl-6">

            {/* Quote / Narrative Text */}
            <div className="lg:col-span-8 space-y-6">
              <div className="text-[#f9440d] font-extrabold text-5xl leading-none">“</div>
              <blockquote className="text-xl sm:text-2xl font-semibold leading-relaxed tracking-tight text-[var(--rl-heading)] -mt-6">
                A crucible is a vessel where raw material is subjected to real heat and pressure and comes out transformed. That’s a precise metaphor for what RLabZ actually does: it takes students and puts them through live client projects—not simulations—until they come out job-ready. It also quietly nods to ‘lab’ without being a literal beaker icon.
              </blockquote>

              {/* Official Attached RLabZ Logo Lockup */}
              <div className="pt-2">
                <CrucibleLogo variant="auto" size={54} />
              </div>
            </div>

            {/* Metaphor Pillars Badge Card */}
            <div className="lg:col-span-4 rounded-2xl p-6 bg-[var(--rl-surface)] border border-[var(--rl-surface-border)] backdrop-blur-xl flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#27a3ff] flex items-center gap-2">
                <Compass className="w-4 h-4" />
                Three Pillars of Transformation
              </h4>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[var(--rl-chip-bg)] border border-[var(--rl-surface-border)]">
                <div className="p-2 rounded-lg bg-[#f9440d]/15 text-[#f9440d] shrink-0">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[var(--rl-heading)]">Real Heat & Pressure</h5>
                  <p className="text-[11px] text-[var(--rl-muted)]">Live client projects instead of artificial simulations.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[var(--rl-chip-bg)] border border-[var(--rl-surface-border)]">
                <div className="p-2 rounded-lg bg-[#27a3ff]/15 text-[#27a3ff] shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[var(--rl-heading)]">Job-Ready Talent</h5>
                  <p className="text-[11px] text-[var(--rl-muted)]">Transforming learners into battle-tested professionals.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[var(--rl-chip-bg)] border border-[var(--rl-surface-border)]">
                <div className="p-2 rounded-lg bg-[#43ae47]/15 text-[#43ae47] shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[var(--rl-heading)]">Modern Lab Innovation</h5>
                  <p className="text-[11px] text-[var(--rl-muted)]">Abstract 4-blade mark avoiding cliché beaker graphics.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BrandNarrative;
