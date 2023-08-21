import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Conta } from 'src/app/shared';
import { AuthService } from '../services';
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

  constructor(private authService: AuthService, private router: Router){}

  login(): void {
  this.authService.login(this.conta).subscribe((usu) => {
    if (usu != null) {
      this.authService.usuarioLogado = usu;
      this.router.navigate(['/']);
    } else {
      console.log("Usuario/Senha incorreta!");
    }
  });
}
}
