import React from 'react';
import Hero from '../components/Hero';
import BrandNarrative from '../components/BrandNarrative';

export const HomePage = ({ onDownloadBrandKit }) => {
  return (
    <div className="space-y-12">
      <Hero onDownloadBrandKit={onDownloadBrandKit} />
      <BrandNarrative />
    </div>
  );
};

export default HomePage;
