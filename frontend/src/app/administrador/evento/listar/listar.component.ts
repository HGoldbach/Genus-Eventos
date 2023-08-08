import { Component, OnInit } from '@angular/core';
import { Cliente, Evento, Profissional } from 'src/app/shared';
import { EventoService } from '../services';

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
    setTimeout(() => {
      console.log(this.eventos)
    },1000);
  }

  constructor(private eventoService: EventoService) { }

  buscarEventos(): Evento[] {
    this.eventoService.buscarEventos().subscribe({
      next: (data: Evento[]) => {
        if (data == null) {
          this.eventos = [];
        } else {
          this.eventos = data;
        }
      }
    })
    return this.eventos;
  }

  teste(evento: Evento): void {
    console.log(evento);
  }

}
