import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth';
import { Cliente } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioLogado = this.authService.usuarioLogado;

  private CLIENTE_BASE_URL = "http://localhost:8080/api/clientes/email";

  HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.usuarioLogado.token}`
    })
  }

  constructor(private httpClient: HttpClient, private authService: AuthService){}

  buscarDados() : Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.CLIENTE_BASE_URL + "/" + this.usuarioLogado.email, this.HttpOptions);
  }
}
