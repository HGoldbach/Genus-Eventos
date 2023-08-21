import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, Conta, Usuario } from 'src/app/shared';

const LS_CHAVE : string = "usuarioLogado";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private CONTA_BASE_URL = "http://localhost:8080/api/conta";

  private HttpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  public get usuarioLogado(): Usuario {
    let usu = localStorage[LS_CHAVE];
    return (usu ? JSON.parse(localStorage[LS_CHAVE]) : null);
  }

  public set usuarioLogado(usuario: Usuario) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  logout() {
    delete localStorage[LS_CHAVE];
  }


  criarConta(cliente: Cliente): Observable<any> {
    return this.httpClient.post(this.CONTA_BASE_URL + "/register", JSON.stringify(cliente), this.HttpOptions);
  } 

  login(conta: Conta): Observable<any> {
    return this.httpClient.post(this.CONTA_BASE_URL + "/login", JSON.stringify(conta), this.HttpOptions);
  } 
}
