import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoRoutingModule } from './evento-routing.module';
import { ListarComponent } from './listar/listar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InserirEditarComponent } from './inserir-editar/inserir-editar.component';
import { EventoService } from './services';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    ListarComponent,
    InserirEditarComponent,
  ],
  imports: [
    CommonModule,
    EventoRoutingModule,
    SharedModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgSelectModule,
    NgxMaskModule.forRoot(),
    MatButtonModule,
    MatIconModule,
    MatTableModule,
  ],
  providers: [
    EventoService
  ]
})
export class EventoModule { }
