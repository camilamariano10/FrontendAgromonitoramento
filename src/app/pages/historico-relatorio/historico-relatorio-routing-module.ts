import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricoRelatorio } from './historico-relatorio';

const routes: Routes = [{
  path: '', // Rota padrão para o módulo Sobre
  component: HistoricoRelatorio // Define o componente Sobre para esta rota
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HistoricoRelatorioRoutingModule { }
