import { Component } from '@angular/core';

@Component({
  selector: 'app-planos',
  standalone: false,
  templateUrl: './planos.html',
  styleUrl: './planos.css'
})
export class Planos { // Variável que irá controlar qual plano está ativo.
  activePlan: 'pf' | 'pj'= 'pf'; // Começamos com 'pf' para que o conteúdo de pessoa física apareça por padrão.

  selectPlan(plan: 'pf' | 'pj'){ // Método que será chamado pelos botões para mudar o plano ativo.
    this.activePlan= plan;
  }

}
