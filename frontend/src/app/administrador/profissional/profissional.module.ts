import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfissionalRoutingModule } from './profissional-routing.module';
import { ListarComponent } from './listar/listar.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListarComponent,
  ],
  imports: [
    CommonModule,
    ProfissionalRoutingModule,
    SharedModule
  ]
})
export class ProfissionalModule { }
