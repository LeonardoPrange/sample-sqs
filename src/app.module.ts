import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadastroModule } from './cadastro/cadastro.module';
import { ContratoModule } from './contrato/contratos.module';

@Module({
  imports: [CadastroModule, ContratoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
