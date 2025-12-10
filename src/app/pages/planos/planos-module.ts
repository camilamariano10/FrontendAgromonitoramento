import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanosRoutingModule } from './planos-routing-module';
import { Planos } from './planos';


@NgModule({
  declarations: [
    Planos
  ],
  imports: [
    CommonModule,
    PlanosRoutingModule
  ]
})
export class PlanosModule { }
