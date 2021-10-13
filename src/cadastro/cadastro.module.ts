import { Module } from '@nestjs/common';
import { CadastroController } from './controllers/cadastro.controller';
import { ImovelRepository } from './infrastructure/repositories/imovel.repository';
import { MessageService } from './infrastructure/services/message.service';
import { ImovelService } from './services/imovel.service';

@Module({
  imports: [],
  controllers: [CadastroController],
  providers: [ImovelRepository, ImovelService, MessageService],
})
export class CadastroModule {}
