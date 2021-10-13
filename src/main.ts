import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { MessageService } from './contrato/infrastructure/services/message.service';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      strategy: new MessageService(),
    },
  );
  app.listen();
  const otherApp = await NestFactory.create(AppModule);
  await otherApp.listen(3000);
}

// Make sure to gracefully log any bootstrapping errors
bootstrap().catch(console.error);
