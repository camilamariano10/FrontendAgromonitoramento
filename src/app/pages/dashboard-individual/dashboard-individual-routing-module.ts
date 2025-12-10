import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardIndividual } from './dashboard-individual';

const routes: Routes = [];

export const dashboardIndividualRoutes: Routes = [
  { path: '', component: DashboardIndividual }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardIndividualRoutingModule { }
