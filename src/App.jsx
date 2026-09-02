import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import JSZip from 'jszip';
import confetti from 'canvas-confetti';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';

import HomePage from './pages/HomePage';
import LogosPage from './pages/LogosPage';
import ColorsPage from './pages/ColorsPage';
import TypographyPage from './pages/TypographyPage';
import MockupsPage from './pages/MockupsPage';
import DownloadsPage from './pages/DownloadsPage';

// Scroll to top automatically on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function AppContent() {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = '#001220';
    document.body.style.color = '#ffffff';
  }, []);

  const triggerToast = (toastData) => {
    setToast(toastData);
  };

  // Master Brand Kit ZIP Downloader using JSZip
  const handleDownloadBrandKit = async () => {
    try {
      triggerToast({
        type: 'info',
        title: 'Generating Zip',
        message: 'Bundling RLabZ Master Brand Kit (.ZIP)...',
      });

      const zip = new JSZip();

      // 1. Add SVG files to Logos folder
      const logosFolder = zip.folder('Logos');
      
      const darkLogoSvg = `<svg width="450" height="120" viewBox="0 0 450 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="b1" x1="20%" y1="10%" x2="90%" y2="90%"><stop offset="0%" stop-color="#27a3ff"/><stop offset="50%" stop-color="#0064a3"/><stop offset="100%" stop-color="#002c49"/></linearGradient>
          <linearGradient id="b4" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="0%" stop-color="#43ae47"/><stop offset="60%" stop-color="#2cb5a8"/><stop offset="100%" stop-color="#27a3ff"/></linearGradient>
        </defs>
        <g transform="translate(10, 10) scale(0.5)">
          <path d="M 72 26 C 98 26 132 46 142 82 C 145 92 138 98 128 92 C 104 78 78 72 52 82 C 45 85 38 78 44 71 C 52 50 60 36 72 26 Z" fill="url(#b1)"/>
          <path d="M 50 88 C 76 78 114 82 152 108 C 158 112 154 120 144 118 C 120 114 94 116 66 128 C 58 131 52 124 56 117 C 54 105 51 96 50 88 Z" fill="#002c49"/>
          <path d="M 64 132 C 88 122 126 122 166 142 C 172 145 167 154 158 152 C 136 147 110 148 84 158 C 77 161 71 154 75 147 C 72 141 68 136 64 132 Z" fill="#43ae47"/>
          <path d="M 80 162 C 102 154 138 153 176 168 C 182 170 178 178 170 177 C 150 174 126 174 100 182 C 93 184 87 178 91 172 C 87 168 83 165 80 162 Z" fill="url(#b4)"/>
        </g>
        <text x="135" y="65" font-family="sans-serif" font-weight="800" font-size="44" fill="#ffffff">RLabZ</text>
        <text x="135" y="92" font-family="sans-serif" font-weight="600" font-size="12" letter-spacing="1.5" fill="#cbd5e1">DESIGN | DEVELOPMENT | TRAINING</text>
      </svg>`;

      const lightLogoSvg = darkLogoSvg.replace('fill="#ffffff"', 'fill="#002c49"').replace('fill="#cbd5e1"', 'fill="#002c49"');

      const symbolSvg = `<svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blade1Grad" x1="20%" y1="10%" x2="90%" y2="90%"><stop offset="0%" stop-color="#27a3ff"/><stop offset="50%" stop-color="#0064a3"/><stop offset="100%" stop-color="#002c49"/></linearGradient>
          <linearGradient id="blade4Grad" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="0%" stop-color="#43ae47"/><stop offset="60%" stop-color="#2cb5a8"/><stop offset="100%" stop-color="#27a3ff"/></linearGradient>
        </defs>
        <path d="M 72 26 C 98 26 132 46 142 82 C 145 92 138 98 128 92 C 104 78 78 72 52 82 C 45 85 38 78 44 71 C 52 50 60 36 72 26 Z" fill="url(#blade1Grad)"/>
        <path d="M 50 88 C 76 78 114 82 152 108 C 158 112 154 120 144 118 C 120 114 94 116 66 128 C 58 131 52 124 56 117 C 54 105 51 96 50 88 Z" fill="#002c49"/>
        <path d="M 64 132 C 88 122 126 122 166 142 C 172 145 167 154 158 152 C 136 147 110 148 84 158 C 77 161 71 154 75 147 C 72 141 68 136 64 132 Z" fill="#43ae47"/>
        <path d="M 80 162 C 102 154 138 153 176 168 C 182 170 178 178 170 177 C 150 174 126 174 100 182 C 93 184 87 178 91 172 C 87 168 83 165 80 162 Z" fill="url(#b4)"/>
      </svg>`;

      logosFolder.file('rlabz-logo-dark.svg', darkLogoSvg);
      logosFolder.file('rlabz-logo-light.svg', lightLogoSvg);
      logosFolder.file('rlabz-crucible-emblem.svg', symbolSvg);

      // 2. Add Tokens folder (CSS & JSON)
      const tokensFolder = zip.folder('Tokens');
      const cssTokens = `:root {
  --rlabz-navy: #002c49;
  --rlabz-crucible-flame: #f9440d;
  --rlabz-cyan: #27a3ff;
  --rlabz-green: #43ae47;
  --rlabz-slate-bg: #F8FAFC;
  --rlabz-dark-bg: #001220;
  --rlabz-font-primary: 'Plus Jakarta Sans', 'Inter', sans-serif;
}`;
      tokensFolder.file('brand-tokens.css', cssTokens);
      tokensFolder.file('brand-colors.json', JSON.stringify({
        primary: {
          navy: '#002c49',
          flame: '#f9440d',
          cyan: '#27a3ff',
          green: '#43ae47',
        },
        neutrals: {
          slateBg: '#F8FAFC',
          pureWhite: '#FFFFFF',
          darkBg: '#001220',
        }
      }, null, 2));

      // 3. Add Guidelines Documentation
      const guidelinesText = `RLabZ BRAND IDENTITY SYSTEM - QUICK GUIDELINES

1. LOGO CLEAR SPACE
   Keep clear space around the emblem equal to at least 1.0x the height of the letter 'R'.

2. BRAND METAPHOR (THE CRUCIBLE)
   A crucible is a vessel where raw material is subjected to real heat and pressure and comes out transformed.
   RLabZ takes students and puts them through live client projects until they come out job-ready.

3. COLOR PALETTE
   - Deep Navy: #002c49 (Dominant Base)
   - Crucible Flame: #f9440d (Primary Accent / CTA)
   - Electric Cyan: #27a3ff (Tech Accent / Glow)
   - Growth Green: #43ae47 (Transformation / Status)

4. TYPOGRAPHY
   - Primary: Plus Jakarta Sans / Inter
   - Headings: Bold / ExtraBold
   - Body: Regular 400

For questions, contact brand@rlabz.com`;
      zip.file('RLabZ-Brand-Guidelines-2026.txt', guidelinesText);

      // Generate Zip Blob
      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'RLabZ-Master-Brand-Kit.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      // Trigger Confetti effect
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f9440d', '#27a3ff', '#43ae47', '#002c49'],
      });

      triggerToast({
        type: 'success',
        title: 'Brand Kit Downloaded!',
        message: 'RLabZ-Master-Brand-Kit.zip downloaded successfully.',
      });
    } catch (err) {
      console.error('ZIP error:', err);
      triggerToast({
        type: 'error',
        title: 'Download Failed',
        message: 'Could not generate ZIP archive. Please try again.',
      });
    }
  };

  return (
    <div
      className="relative min-h-screen text-white overflow-x-hidden selection:bg-[#27a3ff] selection:text-white flex flex-col justify-between font-sans antialiased"
      style={{
        backgroundColor: "#001220",
        backgroundImage: `
          radial-gradient(at 10% 15%, rgba(39, 163, 255, 0.35) 0px, transparent 55%),
          radial-gradient(at 90% 20%, rgba(67, 174, 71, 0.28) 0px, transparent 50%),
          radial-gradient(at 50% 85%, rgba(0, 44, 73, 0.8) 0px, transparent 65%),
          radial-gradient(at 80% 80%, rgba(249, 68, 13, 0.12) 0px, transparent 45%)
        `,
        backgroundAttachment: "fixed",
        backgroundSize: "cover"
      }}
    >
      <ScrollToTop />

      {/* Page Content Container */}
      <div className="relative z-10 flex-grow flex flex-col justify-between">
        {/* Sticky Multi-Page Navigation */}
        <Navbar onDownloadBrandKit={handleDownloadBrandKit} />

        {/* Multi-Page Route View Switcher */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onDownloadBrandKit={handleDownloadBrandKit} />} />
            <Route path="/logos" element={<LogosPage onTriggerToast={triggerToast} />} />
            <Route path="/colors" element={<ColorsPage onTriggerToast={triggerToast} />} />
            <Route path="/typography" element={<TypographyPage />} />
            <Route path="/mockups" element={<MockupsPage />} />
            <Route path="/downloads" element={<DownloadsPage onDownloadBrandKit={handleDownloadBrandKit} onTriggerToast={triggerToast} />} />
            <Route path="*" element={<HomePage onDownloadBrandKit={handleDownloadBrandKit} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>

      {/* Floating Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
