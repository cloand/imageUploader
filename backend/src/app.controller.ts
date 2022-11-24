import { Body, Controller, Get, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';

@Controller('upload')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService:ConfigService
    ) {}

  @Post('azure')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(@UploadedFile() image:Express.Multer.File): Promise<String> {
    console.log(image,'ket')
    const containerName : string = this.configService.get('CONTAINER_NAME')
    return await this.appService.azureImageUpload(image,containerName);
  }
}
