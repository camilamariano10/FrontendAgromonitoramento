import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Planos } from './planos';

const routes: Routes = [
  {
    path: '', // Rota padrão para o módulo Planos
    component: Planos // Define o componente Planos para esta rota
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanosRoutingModule { }
