import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContaRoutingModule } from './conta-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    ContaRoutingModule
  ]
})
export class ContaModule { }
