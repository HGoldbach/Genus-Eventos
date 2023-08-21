import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { HomeComponent } from './home';
import { AuthModule } from './auth/auth.module';
import { AdministradorModule } from './administrador/administrador.module';
import { ClienteAdmModule } from './administrador';
import { EventoModule } from './administrador/evento';
import { ProfissionalModule } from './administrador/profissional/profissional.module';
import { UsuarioModule } from './usuario';
import { AuthGuard } from './auth/auth.guard';



const routes: Routes = [
  {
    path: '',
    title: 'Genus Eventos',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'conta',
    loadChildren: () => AuthModule
  },
  {
    path: 'administrador',
    loadChildren: () => AdministradorModule
  },
  {
    path: 'administrador/clientes',
    loadChildren: () => ClienteAdmModule
  },
  {
    path: 'administrador/eventos',
    loadChildren: () => EventoModule
  },
  {
    path: 'administrador/profissionais',
    loadChildren: () => ProfissionalModule
  },
  {
    path: 'usuario',
    loadChildren: () => UsuarioModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
