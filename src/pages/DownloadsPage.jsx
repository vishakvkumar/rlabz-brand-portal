import React from 'react';
import ResourceHub from '../components/ResourceHub';

export const DownloadsPage = ({ onDownloadBrandKit, onTriggerToast }) => {
  return (
    <div className="pt-24 pb-12">
      <ResourceHub onDownloadBrandKit={onDownloadBrandKit} onTriggerToast={onTriggerToast} />
    </div>
  );
};

export default DownloadsPage;
