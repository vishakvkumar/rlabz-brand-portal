import React from 'react';
import ColorPalette from '../components/ColorPalette';

export const ColorsPage = ({ onTriggerToast }) => {
  return (
    <div className="pt-24 pb-12">
      <ColorPalette onTriggerToast={onTriggerToast} />
    </div>
  );
};

export default ColorsPage;
