import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoRoutingModule } from './evento-routing.module';
import { ListarComponent } from './listar/listar.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    EventoRoutingModule,
    SharedModule
  ]
})
export class EventoModule { }
