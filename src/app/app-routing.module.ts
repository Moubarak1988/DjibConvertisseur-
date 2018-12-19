import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistancesComponent } from './distances/distances.component';
import { PoidsComponent } from './poids/poids.component';
import { TemperatureComponent } from './temperature/temperature.component';


const routes: Routes = [
{path:"",redirectTo:"/convertisseur-poids", pathMatch: 'full'},
{path:"convertisseur-distances", component:DistancesComponent},
{path:"convertisseur-poids", component:PoidsComponent},
{path:"convertisseur-temperatures", component:TemperatureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }