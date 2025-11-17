import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciarTelefonesRoutingModule } from './gerenciar-telefones-routing-module';
import { GerenciarTelefones } from './gerenciar-telefones';


@NgModule({
  imports: [
    CommonModule,
    GerenciarTelefonesRoutingModule
  ]
})
export class GerenciarTelefonesModule {}
