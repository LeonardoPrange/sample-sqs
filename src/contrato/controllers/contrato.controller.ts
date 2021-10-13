import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AssinaturaService } from '../services/assinatura.service';

@Controller()
export class ContratoController {
  constructor(private readonly assinaturaService: AssinaturaService) {}

  @MessagePattern('IMOVEL_CADASTRADO')
  handle(data) {
    this.assinaturaService.geraContratoEEnviaPorEmail(data.enderecoCompleto);
  }
}
