import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalheRelatorioRoutingModule } from './detalhe-relatorio-routing-module';
import { DetalheRelatorio } from './detalhe-relatorio';


@NgModule({
  declarations: [
    DetalheRelatorio
  ],
  imports: [
    CommonModule,
    DetalheRelatorioRoutingModule
  ]
})
export class DetalheRelatorioModule { }
