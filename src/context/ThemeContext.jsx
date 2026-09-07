import React, { createContext, useContext, useEffect } from 'react';

export const THEMES = [
  {
    id: 'navy',
    name: 'Corporate Navy',
    description: "Refined dark navy — mirrors the official deck's dark slides.",
    swatch: ['#001526', '#002c49', '#27a3ff', '#43ae47'],
  },
];

const DEFAULT_THEME = 'navy';

const ThemeContext = createContext({ theme: DEFAULT_THEME });

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'navy');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'navy' }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
