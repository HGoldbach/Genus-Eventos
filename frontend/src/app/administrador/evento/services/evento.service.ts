import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth';
import { Evento } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private EVENTO_BASE_URL = 'http://localhost:8080/api/eventos'

  usuarioLogado = this.authService.usuarioLogado;

  private HttpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${this.usuarioLogado.token}`
    })
  }

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  buscarEventos() : Observable<Evento[]> {
    return this.httpClient.get<Evento[]>(this.EVENTO_BASE_URL, this.HttpOptions);
  }

  salvarEvento(evento: Evento): Observable<Evento> {
    return this.httpClient.post<Evento>(this.EVENTO_BASE_URL, JSON.stringify(evento), this.HttpOptions);
  }
  
}
