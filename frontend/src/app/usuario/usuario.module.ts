import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { ClienteInicialComponent } from './cliente-inicial/cliente-inicial.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from './services';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ClienteInicialComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule { }
