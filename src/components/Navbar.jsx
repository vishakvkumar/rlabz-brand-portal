import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Download, Menu, X } from 'lucide-react';
import CrucibleLogo from './CrucibleLogo';

export const Navbar = ({ onDownloadBrandKit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Story', path: '/' },
    { name: 'Logos', path: '/logos' },
    { name: 'Palette', path: '/colors' },
    { name: 'Typography', path: '/typography' },
    { name: 'Voice', path: '/voice' },
    { name: 'Collateral', path: '/mockups' },
    { name: 'Assets', path: '/downloads' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Floating Pill Nav Container */}
        <div className="w-full flex items-center justify-between px-6 py-3.5 rounded-full frosted-nav-pill">
          
          {/* Exact Attached Brand Logo Image - Big & Prominent */}
          <Link to="/" className="group flex items-center gap-3 shrink-0 py-1">
            <CrucibleLogo variant="dark" size={58} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 rounded-full px-4 py-2 bg-white/[0.04] border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-[#27a3ff] to-[#43ae47] text-white shadow-md shadow-[#27a3ff]/20'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions: Large Glass Pill Download Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onDownloadBrandKit}
              className="btn-glass-primary flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wide"
            >
              <Download className="w-4 h-4" />
              <span>Download Brand Kit</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-white/10 border border-white/15 text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto max-w-7xl mx-auto px-4 pt-3 pb-6 border border-white/15 rounded-3xl bg-[#030d18]/95 backdrop-blur-2xl mt-2 flex flex-col gap-2 shadow-2xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-xl text-sm font-bold transition ${
                  isActive
                    ? 'bg-gradient-to-r from-[#27a3ff] to-[#43ae47] text-white'
                    : 'text-slate-200 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2 border-t border-white/10 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDownloadBrandKit();
              }}
              className="w-full btn-glass-primary flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold"
            >
              <Download className="w-4 h-4" />
              <span>Download Brand Kit (.ZIP)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
