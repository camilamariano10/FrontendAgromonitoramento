import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home';  // Importa o componente Home

const routes: Routes = [
  {
    path: '', // Rota padrão para o módulo Home
    component: Home // Define o componente Home para esta rota
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
