import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CadastroPjRoutingModule } from './cadastro-pj-routing-module';
import { CadastroPj } from './cadastro-pj';
import { NgxMaskDirective } from "ngx-mask";


@NgModule({
  declarations: [
    CadastroPj
  ],
  imports: [
    CommonModule,
    CadastroPjRoutingModule,
    ReactiveFormsModule,
    NgxMaskDirective
]
})
export class CadastroPjModule { }
