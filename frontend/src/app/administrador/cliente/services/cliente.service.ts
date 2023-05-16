import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

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
