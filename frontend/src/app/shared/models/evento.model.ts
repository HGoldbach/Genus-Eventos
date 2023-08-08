import { Cliente } from "./cliente.model";
import { Profissional } from "./profissional.model";

export class Evento {
    id?: number;
    cliente?: Cliente;
    profissional?: Profissional[];
    descricao?: string;
    data?: Date;
    inicio?: Date;
    fim?: Date;

    constructor(id?: number, cliente?: Cliente, profissional?: Profissional[], descricao?: string, data?: Date, inicio?: Date, fim?: Date ) {
        this.id = id;
        this.cliente = cliente;
        this.profissional = profissional;
        this.descricao = descricao;
        this.data = data;
        this.inicio = inicio;
        this.fim = fim;
    }
}
