import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing-module';
import { Home } from './home';
import { SharedModule } from '../../shared/shared-module'; // Importa o SharedModule

@NgModule({
  declarations: [
    Home
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

export const homeImports = [
  CommonModule,
  HomeRoutingModule,
  SharedModule,
  Home
];
