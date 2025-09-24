import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sobre } from './sobre';

const routes: Routes = [{
  path: '', // Rota padrão para o módulo Sobre
  component: Sobre // Define o componente Sobre para esta rota
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SobreRoutingModule { }
