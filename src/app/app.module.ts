import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoidsComponent } from './poids/poids.component';
import { DistancesComponent } from './distances/distances.component';
import { TemperatureComponent } from './temperature/temperature.component';

@NgModule({
  declarations: [
    AppComponent,
    PoidsComponent,
    DistancesComponent,
    TemperatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
