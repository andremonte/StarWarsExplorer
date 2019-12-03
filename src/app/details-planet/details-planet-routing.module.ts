import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsPlanetComponent } from './details-planet.component';

const routes: Routes = [{ path: '', component: DetailsPlanetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsPlanetRoutingModule { }
