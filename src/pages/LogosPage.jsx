import React from 'react';
import LogoSystem from '../components/LogoSystem';

export const LogosPage = ({ onTriggerToast }) => {
  return (
    <div className="pt-36 sm:pt-40 pb-20">
      <LogoSystem onTriggerToast={onTriggerToast} />
    </div>
  );
};

export default LogosPage;
