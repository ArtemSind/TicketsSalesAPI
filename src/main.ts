import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import {doc} from "prettier";
import {join} from 'path'


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'), {prefix: '/public'});

  app.enableCors();

  await app.listen(3000);
}
bootstrap();

