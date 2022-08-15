import { Module, Global } from '@nestjs/common';
import { SocketService } from '@/Services';

@Global()
@Module({
  controllers: [],
  providers: [SocketService],
  exports: [SocketService],
})
export class SocketModule {}
