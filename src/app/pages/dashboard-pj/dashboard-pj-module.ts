import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPjRoutingModule } from './dashboard-pj-routing-module';
import { DashboardPj } from './dashboard-pj';


@NgModule({
  declarations: [
    DashboardPj
  ],
  imports: [
    CommonModule,
    DashboardPjRoutingModule
  ]
})
export class DashboardPjModule { }
