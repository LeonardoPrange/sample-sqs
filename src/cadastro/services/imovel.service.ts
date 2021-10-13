import { Injectable } from '@nestjs/common';
import { Imovel } from '../domain/models/imovel';
import { ImovelRepository } from '../infrastructure/repositories/imovel.repository';
import { MessageService } from '../infrastructure/services/message.service';

@Injectable()
export class ImovelService {
  constructor(
    private readonly imovelRepository: ImovelRepository,
    private readonly messageService: MessageService,
  ) {}
  async cadastraImovel(
    enderecoCompleto: string,
    valorImovel: number,
    valorAluguel: number,
  ): Promise<void> {
    const novoImovel = new Imovel(enderecoCompleto, valorImovel, valorAluguel);
    this.imovelRepository.cadastraImovel(novoImovel);
    await this.messageService.sendMessage('IMOVEL_CADASTRADO', novoImovel);
  }
}
