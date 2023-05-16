import { Pessoa } from "./pessoa.model";

export class Cliente implements Pessoa {
    constructor(
        id?: number,
        nome?: string,
        email?: string,
        telefone?: string,
        cpf?: string
    ) {}
}
