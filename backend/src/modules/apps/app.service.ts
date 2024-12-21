import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from './app.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Application)
    private readonly appRepository: Repository<Application>,
  ) {}

  async createApp(data: Partial<Application>): Promise<Application> {
    const app = this.appRepository.create(data);
    return await this.appRepository.save(app);
  }

  async getApps(): Promise<Application[]> {
    return await this.appRepository.find({ order: { createdAt: 'DESC' } });
  }
}
