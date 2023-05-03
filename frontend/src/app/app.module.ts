import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { ContaModule } from './conta/conta.module';
import { EventoModule } from './evento/evento.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContaModule,
    EventoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
