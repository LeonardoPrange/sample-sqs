import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  envia(conteudo: string): void {
    console.log(conteudo);
  }
}
