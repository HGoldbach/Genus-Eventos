import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoRoutingModule } from './evento-routing.module';
import { ListarComponent } from './listar/listar.component';


@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    EventoRoutingModule
  ]
})
export class EventoModule { }
