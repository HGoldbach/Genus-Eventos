import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login';
import { RegistrarComponent } from './registrar';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'conta/login',
    component: LoginComponent
  },
  {
    path: 'conta/registrar',
    component: RegistrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaRoutingModule { }
