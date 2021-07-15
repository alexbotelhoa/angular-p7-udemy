import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarefaRoutes } from './tarefas';
import { DashboardRoutes } from './dashboard';
import { ConversorRoutes } from './conversor';
import { CalculadoraRoutes } from './calculadora';
import { JogoDaVelhaRoutes } from './jogo-da-velha';

const routes: Routes = [
  { 
		path: '', 
		redirectTo: '/dashboard', 
		pathMatch: 'full' 
	},
	...TarefaRoutes,
	...DashboardRoutes,
	...ConversorRoutes,
	...CalculadoraRoutes,
	...JogoDaVelhaRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
