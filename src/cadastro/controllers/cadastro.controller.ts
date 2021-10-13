import { Controller, Post, Get, HttpCode } from '@nestjs/common';
import { ImovelService } from '../services/imovel.service';

@Controller('cadastro')
export class CadastroController {
  constructor(private readonly imovelService: ImovelService) {}

  @Get()
  health(): string {
    return 'ping';
  }

  @Post()
  @HttpCode(204)
  async cadastraImovel(): Promise<void> {
    await this.imovelService.cadastraImovel('Teste som', 110000.0, 1200.0);
  }
}
