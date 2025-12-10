import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPj } from './dashboard-pj';
import { authGuard } from '../../core/auth.guard';

const routes: Routes = [{
  path: '',
  component: DashboardPj,
  canActivate: [authGuard] // Protege a rota com o AuthGuard
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPjRoutingModule { }
