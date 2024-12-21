// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import AppDetails from './pages/AppDetails';
import Layout from './components/Layout';
import ThemeSwitcher from './components/ThemeSwitcher';

const App: React.FC = () => {
  return (
    <Router>
      <ThemeSwitcher />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="app/:id" element={<AppDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
