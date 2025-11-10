import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    // Nenhum componente declarado, pois Button é standalone
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // nenhum componente exportado, pois Button é standalone
  ]
})
export class SharedModule { }
