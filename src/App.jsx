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
        message: 'Bundling RLabZ Official Logo Kit (.ZIP)...',
      });

      const zip = new JSZip();

      const logoFiles = [
        { url: '/logos/rlabz-logo-dark.png', name: 'rlabz-logo-dark.png' },
        { url: '/logos/rlabz-logo-light.png', name: 'rlabz-logo-light.png' },
        { url: '/logos/rlabz-crucible-emblem.png', name: 'rlabz-crucible-emblem.png' },
      ];
      await Promise.all(
        logoFiles.map(async (file) => {
          const res = await fetch(file.url);
          const buffer = await res.arrayBuffer();
          // Place logo directly in zip and in Logos/ directory
          zip.file(file.name, buffer);
          zip.file(`Logos/${file.name}`, buffer);
        })
      );

      // Generate Zip Blob
      const blob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'RLabZ-Logo-Kit.zip';
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
        title: 'Logo Kit Downloaded!',
        message: 'RLabZ-Logo-Kit.zip downloaded successfully.',
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
