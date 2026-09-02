import React from 'react';
import logoDark from '../assets/logo-dark.png';
import logoLight from '../assets/logo-light.png';
import logoSymbol from '../assets/logo-symbol.png';

/**
 * CrucibleMark component rendering the standalone 3D emblem mark image
 */
export const CrucibleMark = ({ size = 64, className = '' }) => {
  const pixelSize = typeof size === 'number' ? `${size}px` : size;

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <img
        src={logoSymbol}
        alt="RLabZ Emblem"
        style={{
          width: pixelSize,
          height: 'auto',
          maxHeight: pixelSize
        }}
        className="object-contain filter drop-shadow-[0_10px_25px_rgba(39,163,255,0.35)] transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
};

/**
 * CrucibleLogo lockup component rendering the exact attached logo image directly
 * Big, bold, un-altered, and 100% authentic to the provided brand file!
 */
export const CrucibleLogo = ({
  variant = 'dark',
  size = 56,
  className = '',
}) => {
  if (variant === 'symbol') {
    return <CrucibleMark size={size} className={className} />;
  }

  const logoImg = variant === 'dark' ? logoDark : logoLight;
  const pixelHeight = typeof size === 'number' ? `${size}px` : size;

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img
        src={logoImg}
        alt="RLabZ Official Logo"
        style={{
          height: pixelHeight,
          width: 'auto',
          minHeight: '44px'
        }}
        className="object-contain filter drop-shadow-md transition-transform duration-300 hover:scale-[1.03]"
      />
    </div>
  );
};

export default CrucibleLogo;
