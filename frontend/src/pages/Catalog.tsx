import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getApps } from '../services/api.ts';

interface App {
  id: number;
  title: string;
}

const Catalog: React.FC = () => {
  const [apps, setApps] = useState<App[]>([]); // Состояние для списка приложений
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const data = await getApps(); // Вызываем API
        setApps(data);
        setIsLoading(false);
      } catch (err) {
        setError('Ошибка загрузки данных.');
        setIsLoading(false);
      }
    };

    fetchApps();
  }, []);

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Каталог приложений</h1>
      <ul>
        {apps.map((app) => (
          <li key={app.id}>
            <Link to={`/app/${app.id}`}>{app.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;
