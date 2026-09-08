import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import JSZip from 'jszip';
import confetti from 'canvas-confetti';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { ThemeProvider } from './context/ThemeContext';

import HomePage from './pages/HomePage';
import LogosPage from './pages/LogosPage';
import ColorsPage from './pages/ColorsPage';
import TypographyPage from './pages/TypographyPage';
import VoicePage from './pages/VoicePage';
import DownloadsPage from './pages/DownloadsPage';

// Scroll to top automatically on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function AppContent() {
  const [toast, setToast] = useState(null);

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

      // 1. Add authentic high-res PNG files to Logos folder
      const logosFolder = zip.folder('Logos');
      const logoFiles = [
        { url: '/logos/rlabz-logo-dark.png', name: 'rlabz-logo-dark.png' },
        { url: '/logos/rlabz-logo-light.png', name: 'rlabz-logo-light.png' },
        { url: '/logos/rlabz-crucible-emblem.png', name: 'rlabz-crucible-emblem.png' },
      ];
      await Promise.all(
        logoFiles.map(async (file) => {
          const res = await fetch(file.url);
          const buffer = await res.arrayBuffer();
          logosFolder.file(file.name, buffer);
        })
      );

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

      // 4. Add official real template files (Presentation, Letterhead, Email Signature)
      const templatesFolder = zip.folder('Templates');
      const officialFiles = [
        { url: '/toolkit/RLabZ-Default-Presentation-Template.pptx', name: 'RLabZ-Default-Presentation-Template.pptx' },
        { url: '/toolkit/RLabZ-Letterhead-Template.docx', name: 'RLabZ-Letterhead-Template.docx' },
        { url: '/toolkit/RLabZ-Email-Signature.html', name: 'RLabZ-Email-Signature.html' },
        { url: '/toolkit/RLabZ-RCSS-Email-Signature.html', name: 'RLabZ-RCSS-Email-Signature.html' },
      ];
      await Promise.all(
        officialFiles.map(async (file) => {
          const res = await fetch(file.url);
          const buffer = await res.arrayBuffer();
          templatesFolder.file(file.name, buffer);
        })
      );

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
    <div className="relative min-h-screen text-[var(--rl-heading)] overflow-x-hidden selection:bg-[#27a3ff] selection:text-white flex flex-col justify-between font-sans antialiased">
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
            <Route path="/voice" element={<VoicePage onTriggerToast={triggerToast} />} />
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
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
