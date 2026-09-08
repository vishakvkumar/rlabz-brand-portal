import React from 'react';
import Hero from '../components/Hero';
import BrandAssetGrid from '../components/BrandAssetGrid';
import BrandNarrative from '../components/BrandNarrative';

export const HomePage = ({ onDownloadBrandKit }) => {
  return (
    <div className="space-y-8 md:space-y-16">
      <Hero onDownloadBrandKit={onDownloadBrandKit} />
      <BrandAssetGrid />
      <BrandNarrative />
    </div>
  );
};

export default HomePage;
