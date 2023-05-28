import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoRoutingModule } from './evento-routing.module';
import { ListarComponent } from './listar/listar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InserirEditarComponent } from './inserir-editar/inserir-editar.component';


@NgModule({
  declarations: [
    ListarComponent,
    InserirEditarComponent
  ],
  imports: [
    CommonModule,
    EventoRoutingModule,
    SharedModule
  ]
})
export class EventoModule { }
