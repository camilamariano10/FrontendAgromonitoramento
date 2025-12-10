import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricoRelatorioRoutingModule } from './historico-relatorio-routing-module';
import { HistoricoRelatorio } from './historico-relatorio';
import { FarmHeaderComponent } from '../../shared/farm-header/farm-header';

@NgModule({
  declarations: [
    HistoricoRelatorio
  ],
  imports: [
    CommonModule,
    HistoricoRelatorioRoutingModule,
    FarmHeaderComponent
  ]
})
export class HistoricoRelatorioModule { }
