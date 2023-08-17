import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteInicialComponent } from './cliente-inicial';

const routes: Routes = [
  {
    path: '',
    component: ClienteInicialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
