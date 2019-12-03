import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../service/starwars.service';
import { Movie } from '../service/models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  private movies: Movie[] = [];
  private route: string = 'films';

  constructor(private movieServ: StarwarsService) { }

  ngOnInit() {
    this.movieServ.getByContent(this.route)
    .subscribe(data => {
      {this.movies = data['results'];}
    })
  }
  cathc(err) {
    throw err;
  }

}
