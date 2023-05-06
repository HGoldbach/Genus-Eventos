import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { HomeComponent } from './home';
import { ContaModule } from './conta/conta.module';
import { AdministradorModule } from './administrador/administrador.module';
import { ClienteModule } from './administrador';
import { EventoModule } from './administrador/evento';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'conta',
    loadChildren: () => ContaModule
  },
  {
    path: 'administrador',
    loadChildren: () => AdministradorModule
  },
  {
    path: 'administrador/clientes',
    loadChildren: () => ClienteModule
  },
  {
    path: 'administrador/eventos',
    loadChildren: () => EventoModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
