export class Conta {
    id?: number;
    usuario?: string;
    senha?: string;

    constructor(id?: number, usuario?: string, senha?: string) {
        this.id = id;
        this.usuario = usuario;
        this.senha = senha;
    }
}
