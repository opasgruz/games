// Импортируем Express
const express = require('express');

// Создаем экземпляр приложения Express
const app = express();

// Определяем порт, на котором будет работать сервер
// Используем переменную окружения PORT или 3001 по умолчанию
const PORT = process.env.PORT || 3001;

// Простой маршрут для корневого URL ('/')
// Когда кто-то зайдет на http://localhost:3001/, он получит это сообщение
app.get('/', (req, res) => {
  res.send('Привет от простого Node.js сервера!');
});

// Добавляем еще один пример маршрута
app.get('/api/message', (req, res) => {
  res.json({ message: 'Это сообщение от API бэкенда!' });
});

// Запускаем сервер и начинаем слушать указанный порт
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  console.log(`Перейдите по адресу http://localhost:${PORT}/`);
});