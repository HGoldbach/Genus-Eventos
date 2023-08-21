import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  constructor(private authService: AuthService, private router: Router) {}

  usuarioLogado = this.authService.usuarioLogado;
  get tipoUsuario() {return (this.usuarioLogado && this.usuarioLogado.tipo) ? this.usuarioLogado.tipo : ''};

  logout() {
    this.authService.logout();
    this.router.navigate(['/conta']);
  }
  
  ngOnInit(): void {
  }

}
