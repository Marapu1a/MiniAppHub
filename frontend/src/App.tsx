import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Layout from './components/Layout';
import ThemeSwitcher from './components/ThemeSwitcher'; // Импортируем ThemeSwitcher

const App: React.FC = () => {
  return (
    <Router>
      <ThemeSwitcher /> {/* Добавили переключатель темы */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;