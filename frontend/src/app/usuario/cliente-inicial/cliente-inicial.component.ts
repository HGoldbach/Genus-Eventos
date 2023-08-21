import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services';
import { Cliente } from 'src/app/shared';

@Component({
  selector: 'app-cliente-inicial',
  templateUrl: './cliente-inicial.component.html',
  styleUrls: ['./cliente-inicial.component.css']
})
export class ClienteInicialComponent implements OnInit {
  cliente!: Cliente;

  ngOnInit(): void {
   this.buscarDados();
  }

  get clienteNome() { return (this.cliente && this.cliente.nome) ? this.cliente.nome : ''}
  get clienteCpf() { return (this.cliente && this.cliente.cpf) ? this.cliente.cpf : ''}
  get clienteEmail() { return (this.cliente && this.cliente.email) ? this.cliente.email : ''}
  get clienteTelefone() { return (this.cliente && this.cliente.telefone) ? this.cliente.telefone : ''}

  constructor(private usuarioService: UsuarioService){}

  buscarDados() : void {
    this.usuarioService.buscarDados().subscribe((cliente) => {
      this.cliente = cliente;
    })
  }

}
