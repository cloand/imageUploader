import { NestFactory } from '@nestjs/core';
import bodyParser from 'body-parser';
import { AppModule } from './app.module';
import express, { json, urlencoded } from 'express'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  
  app.enableCors();
  app.use(json({limit:"50mb"}))
  app.use(urlencoded({extended:true,limit:"50mb",parameterLimit: 1000000}))
  await app.listen(8080);
}
bootstrap();
