import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from 'src/app/auth';
import { Cliente } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  VIACEP_BASE_URL = "https://viacep.com.br/ws/";
  CLIENTE_BASE_URL = "http://localhost:8080/api/clientes";

  usuarioLogado = this.authService.usuarioLogado;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.usuarioLogado.token}` 
    })
  }


  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  buscarEndereco(endereco:string): Observable<Object> {
    return this.httpClient.get<Object>(this.VIACEP_BASE_URL + `${endereco}/json`, this.httpOptions);
  }

  listarTodosClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.CLIENTE_BASE_URL, this.httpOptions);
  }

  buscarClientePorId(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.CLIENTE_BASE_URL + "/" +  id, this.httpOptions);
  }

  buscarClientePorCpf(cpf: string): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.CLIENTE_BASE_URL + "/cpf/" + cpf, this.httpOptions);
  }

  removerCliente(id: number): Observable<Cliente> {
    return this.httpClient.delete<Cliente>(this.CLIENTE_BASE_URL + "/" + id, this.httpOptions);
  }

  inserirCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.CLIENTE_BASE_URL, JSON.stringify(cliente), this.httpOptions);
  }
  
  alterarCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(this.CLIENTE_BASE_URL, JSON.stringify(cliente), this.httpOptions);
  }

}
