import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Especialidade, Profissional } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {
  VIACEP_BASE_URL = "https://viacep.com.br/ws/";
  PROFISSIONAL_BASE_URL = "http://localhost:8080/api/profissionais";
  ESPECIALIDADE_BASE_URL = "http://localhost:8080/api/especialidades";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  buscarEndereco(endereco:string): Observable<Object> {
    return this.httpClient.get<Object>(this.VIACEP_BASE_URL + `${endereco}/json`, this.httpOptions);
  }

  buscarProfissionais(): Observable<Profissional[]> {
    return this.httpClient.get<Profissional[]>(this.PROFISSIONAL_BASE_URL, this.httpOptions);
  }

  buscarProfissionalPorId(id: number): Observable<Profissional> {
    return this.httpClient.get<Profissional>(this.PROFISSIONAL_BASE_URL + "/" + id, this.httpOptions);
  }

  salvarProfissional(profissional: Profissional): Observable<Profissional> {
    return this.httpClient.post<Profissional>(this.PROFISSIONAL_BASE_URL, JSON.stringify(profissional), this.httpOptions);
  }

  alterarProfissional(profissional: Profissional): Observable<Profissional> {
    return this.httpClient.put<Profissional>(this.PROFISSIONAL_BASE_URL, JSON.stringify(profissional), this.httpOptions);
  }

  removerProfissional(id: number): Observable<Profissional> {
    return this.httpClient.delete<Profissional>(this.PROFISSIONAL_BASE_URL + "/" + id, this.httpOptions);
  }

  buscarEspecialidades(): Observable<Especialidade[]> {
    return this.httpClient.get<Especialidade[]>(this.ESPECIALIDADE_BASE_URL, this.httpOptions);
  }


}
