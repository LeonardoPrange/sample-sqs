import { Injectable } from '@nestjs/common';
import { Imovel } from '../../domain/models/imovel';

const DB = [];

@Injectable()
export class ImovelRepository {
  cadastraImovel(imovel: Imovel): void {
    DB.push(imovel);
  }
}
