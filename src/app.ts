import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api/api.module';
import { API_VERSION, config } from './shared/constants';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(ApiModule);
    app.setGlobalPrefix(API_VERSION);
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors();
    await app.listen(process.env.PORT ?? config.port);
}

bootstrap();
