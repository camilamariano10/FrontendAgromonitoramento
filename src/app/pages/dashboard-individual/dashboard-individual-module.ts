import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardIndividualRoutingModule } from './dashboard-individual-routing-module';
import { DashboardIndividual } from './dashboard-individual';
import { FarmHeaderComponent } from '../../shared/farm-header/farm-header';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    DashboardIndividualRoutingModule,
    DashboardIndividual,
    FarmHeaderComponent
  ]
})
export class DashboardIndividualModule { }
