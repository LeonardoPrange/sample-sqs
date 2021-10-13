import { Injectable } from '@nestjs/common';

@Injectable()
export class PrefeituraService {
  validaEnderecoDoImovel(): boolean {
    return true;
  }
}
