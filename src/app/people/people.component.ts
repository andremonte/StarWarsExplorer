import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../service/starwars.service';
import { People } from '../service/models/people.model';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  private people: People[] = [];
  private route: string = 'people';
  
  constructor(private peopleServ: StarwarsService) { }

  ngOnInit() {
    try {
      this.peopleServ.getByContent(this.route)
      .subscribe(data => {
        {this.people = data['results'];}
      })
    }
    catch (err) {
      throw err;
    }
  }

}
