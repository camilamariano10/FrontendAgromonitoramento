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
  },
  {
    path: 'contato',
    loadChildren: () => import('./pages/contato/contato-module').then(m => m.ContatoModule) //Rota da página contato
  },
  {
    path: 'planos',
    loadChildren: () => import('./pages/planos/planos-module').then(m => m.PlanosModule) //Rota da página planos
  },
  {
    path: 'cadastro-pf',
    loadChildren: () => import('./pages/cadastro-pf/cadastro-pf-module').then(m => m.CadastroPFModule) //Rota da página cadastro pessoa física
  },
  {
    path: 'cadastro-pj',
    loadChildren: () => import('./pages/cadastro-pj/cadastro-pj-module').then(m => m.CadastroPjModule) //Rota da página cadastro pessoa jurídica
  },
  {
    path: 'dashboard-pj',
    loadChildren: () => import('./pages/dashboard-pj/dashboard-pj-module').then(m => m.DashboardPjModule) //Rota da página dashboard pessoa jurídica
  },
  {
    path: 'gerenciar-telefones',
    loadChildren: () => import('./pages/gerenciar-telefones/gerenciar-telefones-module').then(m => m.GerenciarTelefonesModule) //Rota da página gerenciar telefones
  },
  {
    path: 'dashboard-individual',
    loadChildren: () => import('./pages/dashboard-individual/dashboard-individual-module').then(m => m.DashboardIndividualModule) //Rota da página dashboard pessoa física
  },
  {
    path: 'historico-relatorio',
    loadChildren: () => import('./pages/historico-relatorio/historico-relatorio-module').then(m => m.HistoricoRelatorioModule) //Rota da página histórico relatório
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
