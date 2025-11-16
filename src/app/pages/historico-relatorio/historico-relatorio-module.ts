import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricoRelatorioRoutingModule } from './historico-relatorio-routing-module';
import { HistoricoRelatorio } from './historico-relatorio';

@NgModule({
  declarations: [
    HistoricoRelatorio
  ],
  imports: [
    CommonModule,
    HistoricoRelatorioRoutingModule
  ]
})
export class HistoricoRelatorioModule { }
