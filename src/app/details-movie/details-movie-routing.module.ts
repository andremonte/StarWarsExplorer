import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsMovieComponent } from './details-movie.component';

const routes: Routes = [{ path: '', component: DetailsMovieComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsMovieRoutingModule { }
