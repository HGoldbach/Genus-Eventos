import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/shared';
import { AuthService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit{
  @ViewChild('registrarForm') registrarForm! : NgForm;
  cliente!: Cliente;


  ngOnInit(): void {
    this.cliente = new Cliente();
  }

  constructor(private contaService: AuthService, private router: Router){}

  registrarConta() {
    this.contaService.criarConta(this.cliente).subscribe({
      next: () => {
        this.router.navigate(['/conta/login']);
      },
      error: (error) => {
        console.error("Erro ao criar conta:", error);
        if (error.status) {
          console.log("Status code:", error.status); // Status code do erro
        }
      }
    });
  }

}
