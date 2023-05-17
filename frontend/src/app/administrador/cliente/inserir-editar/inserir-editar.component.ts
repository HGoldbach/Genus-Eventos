import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/shared';
import { ClienteService } from '../services';



@Component({
  selector: 'app-inserir-editar',
  templateUrl: './inserir-editar.component.html',
  styleUrls: ['./inserir-editar.component.css']
})
export class InserirEditarComponent implements OnInit {
  @ViewChild('formCliente') formCliente!: NgForm;
  rua: string = '';
  bairro: string = '';
  cidade: string = '';
  cliente: Cliente = new Cliente();
  myData$: any;

  ngOnInit(): void {

  }

  constructor(private clienteService: ClienteService) { }


  buscarEndereco(cep: string) {
    this.clienteService.buscarEndereco(cep).subscribe(data => {
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
