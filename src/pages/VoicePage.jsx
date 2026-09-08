import React from 'react';
import VoiceSection from '../components/VoiceSection';

export const VoicePage = ({ onTriggerToast }) => {
  return (
    <div className="pt-36 sm:pt-40 pb-20">
      <VoiceSection onTriggerToast={onTriggerToast} />
    </div>
  );
};

export default VoicePage;
