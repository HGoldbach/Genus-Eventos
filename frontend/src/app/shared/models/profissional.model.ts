import { Especialidade } from "./especialidade.model";
import { Pessoa } from "./pessoa.model";

export class Profissional implements Pessoa {
    id?: number;
    nome?: string;
    email?: string;
    telefone?: string;
    cpf?: string;
    especialidade?: Especialidade

    constructor( id?: number, nome?: string, email?: string, telefone?: string, cpf?: string, especialidade?: Especialidade) { 
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.cpf = cpf;
        this.especialidade = especialidade;
    }
}
