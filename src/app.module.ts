import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from '@/app.service';
import { connectorConfig } from '@/Config';
// import { AuthMiddleware } from './middleware/auth.middleware';

import { AppController } from '@/app.controller';
import { AppGateway } from '@/app.gateway';
import { SocketModule } from '@/GlobalModules';

@Module({
  imports: [
    TypeOrmModule.forRoot(connectorConfig.getTypeOrmConfig()),
    SocketModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Middleware
  }
}
