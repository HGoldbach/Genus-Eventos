import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContaRoutingModule } from './conta-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ContaService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    ContaRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    ContaService
  ]
})
export class ContaModule { }
