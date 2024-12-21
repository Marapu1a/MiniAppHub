// src/contexts/ThemeContext.ts
import { createContext } from 'react';

type Theme = 'light' | 'dark';
type FontSize = 'small' | 'medium' | 'large';

export interface ThemeContextProps {
  theme: Theme;
  fontSize: FontSize;
  toggleTheme: () => void;
  setFontSize: (size: FontSize) => void;
}

// Создаем контекст
export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);
