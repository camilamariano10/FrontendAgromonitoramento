import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPjRoutingModule } from './dashboard-pj-routing-module';
import { DashboardPj } from './dashboard-pj';
import { FarmHeaderComponent } from '../../shared/farm-header/farm-header';





@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    DashboardPjRoutingModule,
    FarmHeaderComponent
  ]
})
export class DashboardPjModule { }
