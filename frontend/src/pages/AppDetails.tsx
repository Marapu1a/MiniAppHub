import React from 'react';
import { useParams } from 'react-router-dom';

const AppDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Получаем ID приложения из URL

  return (
    <div>
      <h1>Подробности Mini App {id}</h1>
      <p>Здесь будет информация о приложении с ID: {id}</p>
    </div>
  );
};

export default AppDetails;
