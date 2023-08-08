import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conta } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private CONTA_BASE_URL = "http://localhost:8282/api/conta";

  private HttpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  criarConta(conta: Conta): Observable<Conta> {
    return this.httpClient.post<Conta>(this.CONTA_BASE_URL, JSON.stringify(conta), this.HttpOptions);
  } 

  login(conta: Conta): Observable<boolean> {
    return this.httpClient.post<boolean>(this.CONTA_BASE_URL + "/login", JSON.stringify(conta), this.HttpOptions);
  }
}
