import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { EventoModule } from './evento/evento.module';
import { ClienteAdmModule } from './cliente/cliente.module';
import { ProfissionalModule } from './profissional/profissional.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    EventoModule,
    ClienteAdmModule,
    ProfissionalModule,
    SharedModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot(),
  ]
})
export class AdministradorModule { }
