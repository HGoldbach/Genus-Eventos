import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { ClienteInicialComponent } from './cliente-inicial/cliente-inicial.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClienteInicialComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class UsuarioModule { }
