import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: 'people',
    loadChildren: () => import('./people/people.module').then(m => m.PeopleModule)
  },
  {
    path: 'planets',
    loadChildren: () => import('./planets/planets.module').then(m => m.PlanetsModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)
  },


  { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule) },
  { path: 'details/:id', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) },
  { path: 'details-movie/:id', loadChildren: () => import('./details-movie/details-movie.module').then(m => m.DetailsMovieModule) },
  { path: 'details-planet/:id', loadChildren: () => import('./details-planet/details-planet.module').then(m => m.DetailsPlanetModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
