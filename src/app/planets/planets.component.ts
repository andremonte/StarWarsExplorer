import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../service/starwars.service';
import { Planet } from '../service/models/planet.model';


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  private planets: Planet[] = [];
  private route: string = 'planets';

  constructor(private planetServ: StarwarsService) { }

  ngOnInit() {
    try {
      this.planetServ.getByContent(this.route)
      .subscribe(data => {
        {this.planets = data['results'];}
      })
    }
    catch (err) {
      throw err;
    }
  }
}