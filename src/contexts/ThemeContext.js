import React, { createContext, useContext, useState, useEffect } from 'react';
import { theme } from '../styles/theme';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      return saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
      // Atualiza a cor do tema no HTML
      document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
      // Atualiza a cor da barra de status no mobile
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', 
        isDarkMode ? theme.dark.background : theme.light.background
      );
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const currentTheme = isDarkMode ? theme.dark : theme.light;

  const value = {
    isDarkMode,
    toggleTheme,
    theme: currentTheme,
    spacing: theme.spacing,
    borderRadius: theme.borderRadius,
    shadows: theme.shadows,
    animation: theme.animation,
    breakpoints: theme.breakpoints
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 