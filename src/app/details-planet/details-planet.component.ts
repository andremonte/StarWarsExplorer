import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarwarsService } from '../service/starwars.service';

@Component({
  selector: 'app-details-planet',
  templateUrl: './details-planet.component.html',
  styleUrls: ['./details-planet.component.scss']
})
export class DetailsPlanetComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute, private starwarsServ:StarwarsService) { }
  private planet;
  private id: number;
  ngOnInit() {
    
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = +id;
    this.starwarsServ.getPlanet(this.id)
      .subscribe(data => {
        { this.planet = (data); console.log(data) }
      })
  }

}
