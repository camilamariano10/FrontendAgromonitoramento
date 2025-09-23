import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contato } from './contato';

const routes: Routes = [
  {
    path: '', // Rota padrão para o módulo Contato
    component: Contato // Define o componente Contato para esta rota
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule { }
