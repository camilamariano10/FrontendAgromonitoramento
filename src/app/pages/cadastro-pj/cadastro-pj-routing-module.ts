import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPj } from './cadastro-pj';

const routes: Routes = [
  {
    path: '', // Rota padrão para o módulo CadastroPj
    component: CadastroPj, // Define o componente CadastroPj para esta rota
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroPjRoutingModule { }
