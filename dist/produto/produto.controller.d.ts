import { Produto } from 'src/core';
export declare class ProdutoController {
    obterProdutos(): Promise<Produto[]>;
    esperarSegundos(segundos: number): Promise<void>;
}
