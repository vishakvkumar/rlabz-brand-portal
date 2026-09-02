import React from 'react';
import LogoSystem from '../components/LogoSystem';

export const LogosPage = ({ onTriggerToast }) => {
  return (
    <div className="pt-24 pb-12">
      <LogoSystem onTriggerToast={onTriggerToast} />
    </div>
  );
};

export default LogosPage;
