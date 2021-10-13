import { Injectable } from '@nestjs/common';
import { EmailService } from '../infrastructure/services/email.service';
import { ParceiroContratoService } from '../infrastructure/external-services/parceiro-contrato.service';
import { PrefeituraService } from '../infrastructure/external-services/prefeitura.service';

@Injectable()
export class AssinaturaService {
  constructor(
    private readonly prefeituraService: PrefeituraService,
    private readonly parceiroContratoService: ParceiroContratoService,
    private readonly emailService: EmailService,
  ) {}
  geraContratoEEnviaPorEmail(enderecoCompleto: string): void {
    const enderecoEhValido = this.prefeituraService.validaEnderecoDoImovel();
    if (!enderecoEhValido) {
      throw new Error(
        `APPLICATION_ERROR: Endereço inválido: ${enderecoCompleto}`,
      );
    }
    const linkDoContrato = this.parceiroContratoService.geraContrato();
    this.emailService.envia(linkDoContrato);
  }
}
