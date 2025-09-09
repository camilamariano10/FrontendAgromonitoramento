import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreRoutingModule } from './sobre-routing-module';
import { Sobre } from './sobre';


@NgModule({
  declarations: [
    Sobre
  ],
  imports: [
    CommonModule,
    SobreRoutingModule
  ]
})
export class SobreModule { }
