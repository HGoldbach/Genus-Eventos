import { Pessoa } from "./pessoa.model";

export class Cliente implements Pessoa {
    id?: number;
    nome?: string;
    email?: string;
    telefone?: string;
    cpf?: string;
    senha?: string;

    constructor(id?: number, nome?: string, email?: string, telefone?: string, cpf?: string, senha?: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.cpf = cpf;
        this.senha = senha;
    }
}
