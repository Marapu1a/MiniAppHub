import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const { theme, toggleTheme } = themeContext;

  return (
    <div>
      <button onClick={toggleTheme}>
        Переключить на {theme === 'dark' ? 'светлую' : 'тёмную'} тему
      </button>
    </div>
  );
};

export default ThemeSwitcher;
