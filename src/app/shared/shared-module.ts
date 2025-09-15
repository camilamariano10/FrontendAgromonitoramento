import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from './button/button'; // Importa o componente Button



@NgModule({
  declarations: [
    // Nenhum componente declarado, pois Button é standalone
  ],
  imports: [
    CommonModule,
    Button // Importa o componente Button standalone
  ],
  exports: [
    Button // Exporta o componente Button para que possa ser usado em outros módulos
  ]
})
export class SharedModule { }
