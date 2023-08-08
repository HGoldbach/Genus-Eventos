
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente, Especialidade, Evento, Profissional } from 'src/app/shared';
import { EventoService } from '../services';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../cliente';
import { ProfissionalService } from '../../profissional';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-inserir-editar',
  templateUrl: './inserir-editar.component.html',
  styleUrls: ['./inserir-editar.component.css']
})


export class InserirEditarComponent implements OnInit {
  @ViewChild('formEvento') formEvento!: NgForm;
  cliente!: Cliente;
  evento!: Evento;
  novoEvento!: boolean;
  id!: string;
  especialidades: Especialidade[] = [];
  profissionais: Profissional[] = [];
  inicio: Date = new Date();
  fim: Date = new Date();

  ngOnInit(): void {
    this.evento = new Evento();
    this.cliente = new Cliente();
    this.especialidades = this.buscarEspecialidades();
  }

  constructor(private eventoService: EventoService, private clienteService: ClienteService, private profissionalService: ProfissionalService,
    private router: Router, private route: ActivatedRoute) { }

  buscarCliente($event: any): void {
    $event.preventDefault();
    this.clienteService.buscarClientePorCpf(this.cliente.cpf!).subscribe(
      cliente => {
        this.cliente = cliente;
      },
      error => {
        this.cliente = new Cliente();
      }
    )
  }

  salvarEvento(): void {
    this.evento.cliente = this.cliente;
    console.log(this.evento);
    this.evento.profissional = this.profissionais;
    this.eventoService.salvarEvento(this.evento).subscribe(() => {
      this.router.navigate(['/administrador/eventos']);
    })
  }

  buscarEspecialidades(): Especialidade[] {
    this.profissionalService.buscarEspecialidades().subscribe({
      next: (data: Especialidade[]) => {
        if (data == null) {
          this.especialidades = [];
        } else {
          this.especialidades = data;
        }
      }
    });
    return this.especialidades;
  }

  handleCheckboxChange(event: any, descricao: string | undefined) {
    const especialidade = new Especialidade(0, descricao);
    const profissional = new Profissional();
    profissional.especialidade = especialidade;
    if (event.target.checked) {
      this.profissionais.push(profissional);
    } else {
      const index = this.profissionais.findIndex(
        (p: Profissional) => p.especialidade?.descricao === descricao
      );
      if (index > -1) {
        this.profissionais.splice(index, 1);
      }
    }
  }

  teste() : void {

    /*
    let horario = new Date();
    const horas = time.split(':');
    console.log(horas);
    horario.setHours(+horas[0], +horas[1]);
    console.log(horario);
    */

    console.log(this.inicio);

  }

}
