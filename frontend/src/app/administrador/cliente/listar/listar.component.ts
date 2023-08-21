import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared';
import { ClienteService } from '../services';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit{
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService, private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.clientes = [];
    this.listarTodosClientes();
  }

  listarTodosClientes(): Cliente[] {
    this.clienteService.listarTodosClientes().subscribe({
      next: (data: Cliente[]) => {
        if (data == null) {
          this.clientes = [];
        } else {
          this.clientes = data;
        }
      },
      error: () => {
        this.authService.logout();
        this.router.navigate(['/'])
      }
    });

    return this.clientes;
  }

  removerCliente($event: any, cliente: Cliente): void {
    $event.preventDefault();
    if (confirm(`Deseja mesmo remover o cliente ${cliente.nome}`)) {
      this.clienteService.removerCliente(cliente.id!).subscribe({
        complete: () => {
          this.listarTodosClientes();
        }
      })
    }
  }

  
}
