export class Usuario {
    email?: string;
    tipo?: string;
    token?: string;

    constructor(email?: string, tipo?: string, token?: string){
        this.email = email;
        this.tipo = tipo;
        this.token = token;
    }
}
