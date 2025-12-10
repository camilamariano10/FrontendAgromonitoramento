import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenciarTelefones } from './gerenciar-telefones';

const routes: Routes = [
  { path: '', component: GerenciarTelefones }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenciarTelefonesRoutingModule {}
