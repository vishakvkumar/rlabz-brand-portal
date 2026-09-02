import React from 'react';
import { Link } from 'react-router-dom';
import CrucibleLogo from './CrucibleLogo';
import { ShieldCheck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-[#27a3ff]/20 bg-[#041525] text-slate-400 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-800/60">
          
          <div className="md:col-span-6 flex flex-col items-start gap-3">
            <CrucibleLogo variant="dark" size={40} />
            <p className="text-xs text-slate-400 max-w-md">
              Official internal Design System & Brand Identity Portal for RLabZ Design | Development | Training.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-6 text-xs font-semibold">
            <Link to="/" className="hover:text-[#27a3ff] transition">Story</Link>
            <Link to="/logos" className="hover:text-[#27a3ff] transition">Logos</Link>
            <Link to="/colors" className="hover:text-[#27a3ff] transition">Colors</Link>
            <Link to="/typography" className="hover:text-[#27a3ff] transition">Typography</Link>
            <Link to="/mockups" className="hover:text-[#27a3ff] transition">Mockups</Link>
            <Link to="/downloads" className="hover:text-[#27a3ff] transition">Downloads</Link>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span>&copy; {new Date().getFullYear()} RLabZ Inc. All rights reserved. Internal Brand Portal.</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#43ae47]" />
            <span>Enterprise Security Approved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
