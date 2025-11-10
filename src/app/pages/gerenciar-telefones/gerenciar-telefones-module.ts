import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerenciarTelefonesRoutingModule } from './gerenciar-telefones-routing-module';
import { GerenciarTelefones } from './gerenciar-telefones';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: GerenciarTelefones
}];



@NgModule({
  declarations: [
  ],
  imports: [
    GerenciarTelefones,
    CommonModule,
    GerenciarTelefonesRoutingModule
  ]
})
export class GerenciarTelefonesModule { }
