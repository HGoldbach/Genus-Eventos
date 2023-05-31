import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {
  BASE_URL = "https://viacep.com.br/ws/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  buscarEndereco(endereco:string): Observable<Object> {
    
    return this.httpClient.get<Object>(this.BASE_URL + `${endereco}/json`, this.httpOptions);
  }
}
