import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsPlanetRoutingModule } from './details-planet-routing.module';
import { DetailsPlanetComponent } from './details-planet.component';


@NgModule({
  declarations: [DetailsPlanetComponent],
  imports: [
    CommonModule,
    DetailsPlanetRoutingModule
  ]
})
export class DetailsPlanetModule { }
