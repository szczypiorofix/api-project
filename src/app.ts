import { NestFactory } from '@nestjs/core';
import { ApiModule } from "./api/api.module";
import { config } from "./shared/constants/Config.data";

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(process.env.PORT ?? config.port);
}
bootstrap();
