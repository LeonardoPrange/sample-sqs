export class Imovel {
  private enderecoCompleto: string;
  private valorImovel: number;
  private valorAluguel: number;

  constructor(
    enderecoCompleto: string,
    valorImovel: number,
    valorAluguel: number,
  ) {
    if (enderecoCompleto === '')
      throw new Error('DOMAIN_ERROR: Endereço é obrigatório');
    this.enderecoCompleto = enderecoCompleto;
    this.valorAluguel = valorAluguel;
    this.valorImovel = valorImovel;
  }
  public get getEnderecoCompleto(): string {
    return this.enderecoCompleto;
  }
  public get getValorImovel(): number {
    return this.valorImovel;
  }
  public get getValorAlguel(): number {
    return this.valorAluguel;
  }
}
