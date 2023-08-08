import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Conta } from 'src/app/shared';
import { ContaService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @ViewChild('formConta') formConta! : NgForm;
  conta : Conta = new Conta();

  ngOnInit(): void {
    
  }

  constructor(private contaService: ContaService, private router: Router){}

  login() : void {
    this.contaService.login(this.conta).subscribe({
      complete: () => {
        console.log("SUCESSO!");
        this.router.navigate(['/administrador/eventos'])
      },
      error: () => {
        console.log("Erro ao logar");
      }
      
    })
  }
}
