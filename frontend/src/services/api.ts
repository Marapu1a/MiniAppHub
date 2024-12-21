import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Укажи базовый URL
  timeout: 5000, // Устанавливаем тайм-аут
});

// Пример функции для получения списка приложений
export const getApps = async () => {
  const response = await api.get('/apps');
  return response.data;
};

// Пример функции для загрузки нового приложения
export const uploadApp = async (formData: FormData) => {
  const response = await api.post('/apps/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

// Добавь другие запросы, если нужно
