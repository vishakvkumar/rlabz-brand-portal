import React, { useEffect, useRef, useState } from 'react';
import { Palette, Check } from 'lucide-react';
import { THEMES, useTheme } from '../context/ThemeContext';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Change color theme"
        className="p-2.5 rounded-full bg-[var(--rl-chip-bg)] border border-[var(--rl-surface-border)] text-[var(--rl-heading)] hover:bg-[var(--rl-surface-hover)] transition flex items-center justify-center"
      >
        <Palette className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-72 rounded-2xl p-2 frosted-glass-card shadow-2xl z-50">
          <div className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[var(--rl-muted)]">
            Portal Color Theme
          </div>
          <div className="flex flex-col gap-1">
            {THEMES.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setOpen(false);
                }}
                className={`flex items-center gap-3 p-2.5 rounded-xl text-left transition ${
                  t.id === theme ? 'bg-[var(--rl-surface-hover)]' : 'hover:bg-[var(--rl-chip-bg)]'
                }`}
              >
                <div className="flex shrink-0 rounded-lg overflow-hidden border border-[var(--rl-surface-border)] w-10 h-8">
                  {t.swatch.map((hex, i) => (
                    <div key={i} className="flex-1 h-full" style={{ backgroundColor: hex }} />
                  ))}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-[var(--rl-heading)]">{t.name}</div>
                  <div className="text-[10px] text-[var(--rl-muted)] leading-snug">{t.description}</div>
                </div>
                {t.id === theme && <Check className="w-4 h-4 text-[#43ae47] shrink-0" />}
              </button>
            ))}
          </div>
          <div className="px-3 pt-2 pb-1 text-[10px] text-[var(--rl-faint)] border-t border-[var(--rl-surface-border)] mt-1">
            Brand colors stay fixed — only background & surface tone change.
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
