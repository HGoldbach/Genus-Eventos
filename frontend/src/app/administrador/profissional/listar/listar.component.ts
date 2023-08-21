import { Component, OnInit } from '@angular/core';
import { Especialidade, Profissional } from 'src/app/shared';
import { ProfissionalService } from '../services';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'email', 'especialidade', 'acao'];
  profissionais: Profissional[] = [];
  
  constructor(private profissionalService: ProfissionalService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.profissionais = [];
    this.profissionais = this.buscarProfissionais();
  }


  buscarProfissionais(): Profissional[] {
    this.profissionalService.buscarProfissionais().subscribe({
      next: (data: Profissional[]) => {
        if (data == null) {
          this.profissionais = [];
        } else {
          this.profissionais = data;
        }
      },
      error: () => {
        this.authService.logout();
        this.router.navigate(['/'])
      }

    });

    return this.profissionais;
  }

  removerProfissional($event: any, profissional: Profissional): void {
    $event.preventDefault();
    this.profissionalService.removerProfissional(profissional.id!).subscribe({
      complete: () => {
        this.buscarProfissionais();
      }
    })
  }

  openModal(modal: HTMLElement) {
    console.log(modal);
    modal.classList.add('is-active');
  }

  closeModal(modal: HTMLElement) {
    modal.classList.remove('is-active');
  }

  salvarEspecialidade(modal: HTMLElement, especialidade: string) {
    if (especialidade.length !== 0) {
      let novaEspecialidade = new Especialidade(0, especialidade);
      this.profissionalService.salvarEspecialidade(novaEspecialidade).subscribe(() => {
        this.closeModal(modal);
      })
    }

  }
}
