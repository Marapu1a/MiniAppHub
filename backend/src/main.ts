import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173', // Разрешаем запросы с фронтенда
    methods: 'GET,POST,PUT,DELETE',
    credentials: true, // Если нужны куки
  });

  await app.listen(3000);
}
bootstrap();
