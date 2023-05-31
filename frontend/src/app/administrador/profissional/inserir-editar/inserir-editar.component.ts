import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfissionalService } from '../services';
import { Profissional } from 'src/app/shared';

@Component({
  selector: 'app-inserir-editar',
  templateUrl: './inserir-editar.component.html',
  styleUrls: ['./inserir-editar.component.css']
})
export class InserirEditarComponent implements OnInit{
  @ViewChild('formProfissional') formCliente!: NgForm;
  rua: string = '';
  bairro: string = '';
  cidade: string = '';
  profissional: Profissional = new Profissional();
  myData$: any;

  ngOnInit(): void {

  }

  constructor(private profissionalService: ProfissionalService) { }


  buscarEndereco(cep: string) {
    this.profissionalService.buscarEndereco(cep).subscribe(data => {
      this.myData$ = data;
      this.prencherEndereco(this.myData$);
    })
  }

  prencherEndereco(endereco: any): void {
    this.rua = endereco?.logradouro;
    this.bairro = endereco?.bairro;
    this.cidade = endereco?.localidade;
  }
}
