import React from 'react';
import VoiceSection from '../components/VoiceSection';

export const VoicePage = ({ onTriggerToast }) => {
  return (
    <div className="pt-24 pb-12">
      <VoiceSection onTriggerToast={onTriggerToast} />
    </div>
  );
};

export default VoicePage;
