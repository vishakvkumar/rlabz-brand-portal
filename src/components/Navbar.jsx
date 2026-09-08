import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import CrucibleLogo from './CrucibleLogo';

export const Navbar = ({ onDownloadBrandKit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Story', path: '/' },
    { name: 'Logos', path: '/logos' },
    { name: 'Palette', path: '/colors' },
    { name: 'Typography', path: '/typography' },
    { name: 'Voice', path: '/voice' },
    { name: 'Assets', path: '/downloads' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">

        {/* Floating Pill Nav Container */}
        <div className="w-full flex items-center justify-between px-6 py-3 rounded-full frosted-nav-pill">

          {/* Exact Attached Brand Logo Image - Big & Prominent */}
          <Link to="/" className="group flex items-center gap-3 shrink-0 py-1">
            <CrucibleLogo variant="auto" size={58} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full px-3 py-1.5 bg-[var(--rl-chip-bg)] border border-[var(--rl-surface-border)] backdrop-blur-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-[#002c49] text-white border border-[#27a3ff]/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-[var(--rl-chip-bg)] border border-[var(--rl-surface-border)] text-white hover:bg-white/10 transition"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto max-w-7xl mx-auto px-4 pt-3 pb-4 border border-[var(--rl-surface-border)] rounded-3xl mobile-menu-panel mt-2 flex flex-col gap-2 shadow-2xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                  isActive
                    ? 'bg-[#002c49] text-white border border-[#27a3ff]/30'
                    : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
