import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login';
import { RegistrarComponent } from './registrar';

const routes: Routes = [
  {
    path: '',
    title: 'Genus - Login',
    component: LoginComponent,
  },
  {
    path: 'conta/login',
    title: 'Genus - Login',
    component: LoginComponent
  },
  {
    path: 'conta/registrar',
    title: 'Genus - Registrar',
    component: RegistrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaRoutingModule { }
