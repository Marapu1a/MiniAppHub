import {
  Controller,
  Post,
  Body,
  Get,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Express } from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { CreateAppDto } from './create-app.dto';

const uploadDir = path.join(__dirname, '..', '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

@Controller('apps')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: uploadDir,
        filename: (req, file, cb) => {
          cb(null, `${Date.now()}-${file.originalname}`);
        },
      }),
      limits: { fileSize: 50 * 1024 * 1024 }, // 50MB
    }),
  )
  async uploadApp(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: CreateAppDto,
  ) {
    const { title, description, price, contact } = body;
    return await this.appService.createApp({
      title,
      description,
      price,
      contact,
      filename: file.filename,
    });
  }

  @Get()
  async getApps() {
    return await this.appService.getApps();
  }
}
