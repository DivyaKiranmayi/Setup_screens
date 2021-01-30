import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageAlcComponent } from './agency-location-codes/manage-alc/manage-alc.component';
import { CreateAlcComponent } from './agency-location-codes/create-alc/create-alc.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageAlcComponent,
    CreateAlcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
