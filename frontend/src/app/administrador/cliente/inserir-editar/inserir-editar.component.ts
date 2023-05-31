import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/shared';
import { ClienteService } from '../services';
import { ActivatedRoute, Router } from '@angular/router';



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
  novoCliente: boolean = true;
  cliente: Cliente = new Cliente();
  id!: string;
  myData$: any;
  
  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cliente = new Cliente();
    this.id = this.route.snapshot.params['id'];
    this.novoCliente = !this.id;

    if (!this.novoCliente) {
      this.clienteService.buscarClientePorId(+this.id).subscribe(cliente => {
        this.cliente = cliente;
      })
    }
  }

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

  salvar(): void {
    if(this.formCliente.form.valid) {
      if(this.novoCliente) {
        this.clienteService.inserirCliente(this.cliente).subscribe(() => {
          this.router.navigate(["/administrador/clientes"]);
        })
      } else {
        this.clienteService.alterarCliente(+this.id, this.cliente).subscribe(() => {
          this.router.navigate(["/administrador/clientes"]);
        })
      }
    }
  }
}
