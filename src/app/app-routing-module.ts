import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',// path é o caminho da rota
    loadChildren: () => import('./pages/home/home-module').then(m => m.HomeModule) //Rota da página inicial
  },//lodChildren é usado para carregar módulos de forma preguiçosa (lazy loading), somente quando são necessários
  {
    path: 'sobre',
    loadChildren: () => import('./pages/sobre/sobre-module').then(m => m.SobreModule) //Rota da página sobre
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
