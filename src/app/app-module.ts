import {
  NgModule,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { provideNgxMask } from "ngx-mask";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [App, Header, Footer],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule, HttpClientModule],
  providers: [provideBrowserGlobalErrorListeners(), provideZonelessChangeDetection(), provideNgxMask()],
  bootstrap: [App],
})
export class AppModule {}
