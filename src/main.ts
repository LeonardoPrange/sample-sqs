import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { CadastroModule } from './cadastro/cadastro.module';
import { ContratoModule } from './contrato/contratos.module';
import { MessageService } from './contrato/infrastructure/services/message.service';

async function bootstrap() {
  const microservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(ContratoModule, {
      strategy: new MessageService(),
    });
  microservice.listen();
  const app = await NestFactory.create(CadastroModule);
  await app.listen(3000);
}

bootstrap().catch(console.error);
