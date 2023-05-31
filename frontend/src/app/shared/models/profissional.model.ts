import { Especialidade } from "./especialidade.model";
import { Pessoa } from "./pessoa.model";

export class Profissional implements Pessoa {
    constructor(
        id?: number,
        nome?: string,
        email?: string,
        telefone?: string,
        cpf?: string,
        valorHora?: number,
        especialidade?: Especialidade
    ) {}
}
