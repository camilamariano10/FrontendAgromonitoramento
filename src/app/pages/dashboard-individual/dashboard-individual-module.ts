import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardIndividualRoutingModule } from './dashboard-individual-routing-module';
import { DashboardIndividual } from './dashboard-individual';


@NgModule({
  declarations: [
    DashboardIndividual
  ],
  imports: [
    CommonModule,
    DashboardIndividualRoutingModule
  ]
})
export class DashboardIndividualModule { }
