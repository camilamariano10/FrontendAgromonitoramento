import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPjRoutingModule } from './dashboard-pj-routing-module';
import { FarmHeaderComponent } from '../../shared/farm-header/farm-header';





@NgModule({
  imports: [
    CommonModule,
    DashboardPjRoutingModule,
    FarmHeaderComponent
  ]
})
export class DashboardPjModule { }
