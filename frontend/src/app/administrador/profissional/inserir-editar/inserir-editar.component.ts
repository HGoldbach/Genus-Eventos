import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfissionalService } from '../services';
import { Especialidade, Profissional } from 'src/app/shared';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inserir-editar',
  templateUrl: './inserir-editar.component.html',
  styleUrls: ['./inserir-editar.component.css']
})
export class InserirEditarComponent implements OnInit{
  @ViewChild('formProfissional') formCliente!: NgForm;
  profissional: Profissional = new Profissional();
  novoProfissional: boolean = true;
  especialidades: Especialidade[] = [];
  especialidade: Especialidade = new Especialidade();
  id!: string;

  constructor(private profissionalService: ProfissionalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.especialidade = new Especialidade();
    this.profissional = new Profissional();
    this.id = this.route.snapshot.params['id'];
    this.novoProfissional = !this.id;
    this.especialidades = this.buscarEspecialidades();

    if (!this.novoProfissional) {
      this.profissionalService.buscarProfissionalPorId(+this.id).subscribe(profissional => {
        this.profissional = profissional;
      })
      console.log(this.profissional)
    }
  }

  salvarProfissional(): void {
    if (this.formCliente.form.valid) {
      this.profissional.especialidade = this.especialidade;
      console.log(this.profissional);
      if (this.novoProfissional) {
        this.profissionalService.salvarProfissional(this.profissional).subscribe(() => {
          this.router.navigate(["/administrador/profissionais"]);
        })
      } else {
        this.profissionalService.alterarProfissional(this.profissional).subscribe(() => {
          this.router.navigate(["/administrador/profissionais"]);
        })
      }
    }
  }

  buscarEspecialidades() : Especialidade[] {
    this.profissionalService.buscarEspecialidades().subscribe({
      next: (data: Especialidade[]) => {
        if(data == null) {
          this.especialidades = [];
        } else {
          this.especialidades = data;
        }
      }
    })
    return this.especialidades;
  }
}
