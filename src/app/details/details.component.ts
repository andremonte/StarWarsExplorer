import { StarwarsService } from './../service/starwars.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  person;
  planet;
  movie;
  private id: number;
  constructor(private starwarsServ: StarwarsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('LARISSA! '+id);
    this.id = +id;
    this.starwarsServ.poita(this.id)
      .subscribe(data => {
        { this.person = (data); console.log(data['name']) }
      })
  }
}
