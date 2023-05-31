import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfissionalRoutingModule } from './profissional-routing.module';
import { ListarComponent } from './listar/listar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InserirEditarComponent } from './inserir-editar/inserir-editar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    ListarComponent,
    InserirEditarComponent,
  ],
  imports: [
    CommonModule,
    ProfissionalRoutingModule,
    SharedModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgxMaskModule.forChild() 
  ]
})
export class ProfissionalModule { }
