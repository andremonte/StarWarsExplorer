import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarwarsService } from '../service/starwars.service';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.scss']
})
export class DetailsMovieComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private starwarsServ:StarwarsService) { }
  private movie;
  private id: number;

  ngOnInit() {
    const name = this.activatedRoute.params; // movies ou planets ou people
    console.log("details-movie params" + name)
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('LARISSA! '+id);
    this.id = +id;
    this.starwarsServ.getMovie(this.id)
      .subscribe(data => {
        { this.movie = (data); console.log(data) }
      })
  }

}
