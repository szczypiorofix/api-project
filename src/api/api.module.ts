import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HeaderMiddleware } from '../middlewares/header.middleware';
import { LoggerMiddleware } from '../middlewares/loger.middleware';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { MailModule } from '../mail/mail.module';

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }), MailModule],
    controllers: [ApiController],
    providers: [ApiService],
})
export class ApiModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware, HeaderMiddleware).forRoutes('/');
    }
}
