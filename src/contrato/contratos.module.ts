import { Module } from '@nestjs/common';
import { ContratoController } from './controllers/contrato.controller';
import { ParceiroContratoService } from './infrastructure/external-services/parceiro-contrato.service';
import { PrefeituraService } from './infrastructure/external-services/prefeitura.service';
import { EmailService } from './infrastructure/services/email.service';
import { AssinaturaService } from './services/assinatura.service';

@Module({
  imports: [],
  controllers: [ContratoController],
  providers: [
    ParceiroContratoService,
    PrefeituraService,
    AssinaturaService,
    EmailService,
  ],
})
export class ContratoModule {}
