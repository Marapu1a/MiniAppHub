// src/contexts/ThemeProvider.tsx
import { useState, useEffect, ReactNode } from 'react';
import { ThemeContext, ThemeContextProps } from './ThemeContext';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeContextProps['theme']>('dark');
  const [fontSize, setFontSize] = useState<ThemeContextProps['fontSize']>('medium');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, fontSize, toggleTheme, setFontSize }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;