import React from 'react';
import ColorPalette from '../components/ColorPalette';

export const ColorsPage = ({ onTriggerToast }) => {
  return (
    <div className="pt-36 sm:pt-40 pb-20">
      <ColorPalette onTriggerToast={onTriggerToast} />
    </div>
  );
};

export default ColorsPage;
