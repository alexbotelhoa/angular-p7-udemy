import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TarefasModule } from './tarefas';
import { DashboardModule } from './dashboard';
import { ConversorModule } from './conversor';
import { CalculadoraModule } from './calculadora';
import { JogoDaVelhaModule } from './jogo-da-velha';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TarefasModule,
    DashboardModule,
    ConversorModule,
    CalculadoraModule,
    JogoDaVelhaModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
