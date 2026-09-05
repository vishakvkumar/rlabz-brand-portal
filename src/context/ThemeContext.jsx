import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

export const THEMES = [
  {
    id: 'navy',
    name: 'Corporate Navy',
    description: 'Refined dark navy — mirrors the official deck\'s dark slides.',
    swatch: ['#001526', '#002c49', '#27a3ff', '#43ae47'],
  },
  {
    id: 'paper',
    name: 'Slate Light',
    description: 'True light mode — mirrors the letterhead & white deck slides.',
    swatch: ['#f5f7fa', '#ffffff', '#002c49', '#27a3ff'],
  },
  {
    id: 'midnight',
    name: 'Midnight',
    description: 'Quieter, near-black alternate dark mood.',
    swatch: ['#00080f', '#0d2438', '#27a3ff', '#43ae47'],
  },
];

const STORAGE_KEY = 'rlabz-theme';
const DEFAULT_THEME = 'navy';

const getInitialTheme = () => {
  if (typeof window === 'undefined') return DEFAULT_THEME;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && THEMES.some((t) => t.id === stored)) return stored;
  } catch {
    // localStorage unavailable — fall back to default
  }
  return DEFAULT_THEME;
};

const ThemeContext = createContext({ theme: DEFAULT_THEME, setTheme: () => {} });

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore write failures (private browsing, etc.)
    }
  }, [theme]);

  const setTheme = useCallback((id) => {
    if (THEMES.some((t) => t.id === id)) setThemeState(id);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
