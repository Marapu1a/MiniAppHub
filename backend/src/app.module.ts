import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './modules/apps/app.controller';
import { AppService } from './modules/apps/app.service';
import { Application } from './modules/apps/app.entity';

@Module({
  imports: [
    // Глобальная конфигурация подключения к базе данных
    TypeOrmModule.forRoot({
      type: 'postgres', // Тип базы данных
      host: 'localhost', // Адрес базы данных
      port: 5432, // Порт PostgreSQL
      username: 'postgres', // Имя пользователя базы
      password: '2831742dfcz', // Пароль пользователя
      database: 'miniapps_hub', // Имя базы данных
      entities: [Application], // Подключаем сущности
      synchronize: true, // Для разработки включаем авто-синхронизацию
    }),

    // Модуль для работы с сущностью Application
    TypeOrmModule.forFeature([Application]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
