import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ListarComponent } from './listar/listar.component';
import { AdministradorModule } from '../administrador.module';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    SharedModule
  ]
})
export class ClienteModule { }
