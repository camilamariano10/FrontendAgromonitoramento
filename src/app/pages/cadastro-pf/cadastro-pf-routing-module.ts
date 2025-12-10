import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPF } from './cadastro-pf';

const routes: Routes = [
  {
    path: '', // Rota padrão para o módulo CadastroPF
    component: CadastroPF // Define o componente CadastroPF para esta rota
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroPFRoutingModule { }
