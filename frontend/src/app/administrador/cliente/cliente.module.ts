import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ListarComponent } from './listar/listar.component';
import { HeaderComponent } from '../header/header.component';



@NgModule({
  declarations: [
    ListarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
