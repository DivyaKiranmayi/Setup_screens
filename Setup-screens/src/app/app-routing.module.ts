import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrowserModule} from '@angular/platform-browser'
import { SetupRoutingModule } from './routing/setup-routing-module';


@NgModule({
  imports: [BrowserModule, SetupRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
