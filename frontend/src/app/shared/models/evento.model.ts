import { Cliente } from "./cliente.model";
import { Profissional } from "./profissional.model";

export class Evento {
    id?: number;
    cliente?: Cliente;
    profissionais?: Profissional[];
    tipo?: string;
    data?: Date;
    inicio?: Date;
    fim?: Date;

    constructor(id?: number, cliente?: Cliente, profissionais?: Profissional[], tipo?: string, data?: Date, inicio?: Date, fim?: Date ) {
        this.id = id;
        this.cliente = cliente;
        this.profissionais = profissionais;
        this.tipo = tipo;
        this.data = data;
        this.inicio = inicio;
        this.fim = fim;
    }
}
