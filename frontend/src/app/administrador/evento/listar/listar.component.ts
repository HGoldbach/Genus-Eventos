import { Component, OnInit } from '@angular/core';
import { Cliente, Evento, Profissional } from 'src/app/shared';
import { EventoService } from '../services';
import { AuthService } from 'src/app/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  eventos: Evento[] = [];
  cliente: Cliente = new Cliente();

  ngOnInit(): void {
    this.eventos = [];
    this.buscarEventos();
  }

  constructor(private eventoService: EventoService, private authService: AuthService, private router: Router) { }

  buscarEventos(): Evento[] {
    this.eventoService.buscarEventos().subscribe({
      next: (data: Evento[]) => {
        if (data == null) {
          this.eventos = [];
        } else {
          this.eventos = data;
        }
      },
      error: () => {
        this.authService.logout();
        this.router.navigate(['/']);
      }
    })
    return this.eventos;
  }

  teste(evento: Evento): void {
    console.log(evento);
  }

}
