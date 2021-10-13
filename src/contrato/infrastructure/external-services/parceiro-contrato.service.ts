import { Injectable } from '@nestjs/common';

@Injectable()
export class ParceiroContratoService {
  geraContrato(): string {
    return 'URL-DO-CONTRATO';
  }
}
