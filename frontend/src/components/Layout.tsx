import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to="/">Главная</Link> | <Link to="/catalog">Каталог</Link>
      </nav>
      <main>
        <Outlet /> {/* Здесь будут отображаться страницы */}
      </main>
    </div>
  );
};

export default Layout;