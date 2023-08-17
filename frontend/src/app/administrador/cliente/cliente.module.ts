import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ListarComponent } from './listar/listar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InserirEditarComponent } from './inserir-editar/inserir-editar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ClienteService } from './services';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ListarComponent,
    InserirEditarComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    SharedModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NgxMaskModule.forChild(),
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteAdmModule { }
