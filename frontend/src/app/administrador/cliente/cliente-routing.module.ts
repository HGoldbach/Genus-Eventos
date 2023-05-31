import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar';
import { InserirEditarComponent } from './inserir-editar/inserir-editar.component';

const routes: Routes = [
  {
    path: '',
    title: 'Genus - Administração Clientes',
    component: ListarComponent
  },
  {
    path: 'clientes/novo',
    component: InserirEditarComponent
  },
  {
    path: 'clientes/editar/:id',
    component: InserirEditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
