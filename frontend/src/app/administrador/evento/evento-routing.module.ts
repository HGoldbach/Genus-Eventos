import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar';
import { InserirEditarComponent } from './inserir-editar';

const routes: Routes = [
  {
    path: '',
    title: 'Genus - Administração Eventos',
    component: ListarComponent
  },
  {
    path: 'eventos/novo',
    component: InserirEditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoRoutingModule { }
