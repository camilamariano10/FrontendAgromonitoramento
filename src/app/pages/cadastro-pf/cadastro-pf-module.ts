import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CadastroPFRoutingModule } from './cadastro-pf-routing-module';
import { CadastroPF } from './cadastro-pf';
import { NgxMaskDirective } from "ngx-mask";


@NgModule({
  declarations: [
    CadastroPF
  ],
  imports: [
    CommonModule,
    CadastroPFRoutingModule,
    ReactiveFormsModule,
    NgxMaskDirective
]
})
export class CadastroPFModule { }
