import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { People } from './models/people.model';
import { Planet } from './models/planet.model';
import { Movie } from './models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {
  constructor(private http: HttpClient) { }

  private url: string = "https://api.codetabs.com/v1/proxy?quest=https://swapi.dev/api/";
  private result;
  public id: string = '';

  sendPath = new Subject()

  getByContent(route: string): Observable<any> {
    if (route == 'people') {
      /*        for(let i = 1; i < 10; i++) {
              this.result.push(this.http.get<{people: People[]}>(`${this.url}${route}/?page=${i}`));
            } */
      this.result = this.http.get<{ people: People[] }>(`${this.url}` + route);
    }
    else if (route == 'planets') {
      this.result = this.http.get<{ planet: Planet[] }>(`${this.url}` + route);
    }
    else if (route == 'films') {
      this.result = this.http.get<{ planet: Movie[] }>(`${this.url}` + route);
    }
    return this.result;
  }

  setId(id: string) {
    this.id = id;

    this.sendPath.next(this.id);

    console.log('ˆˆˆˆˆˆˆˆˆˆˆˆˆˆˆ' + this.id);
  }

  getPeople(numb: number): Observable<any> {
    let url = `https://api.codetabs.com/v1/proxy?quest=https://swapi.co/api/people/${numb}`;
    console.log(this.id);
    return this.http.get<{ people: People[] }>(url);
  }

  getPlanet(numb: number): Observable<any> {
    let url = `https://api.codetabs.com/v1/proxy?quest=https://swapi.co/api/planets/${numb}`;
    console.log(this.id);
    return this.http.get<{ planet: Planet[] }>(url);
  }

  getMovie(numb: number): Observable<any> {
    let url = `https://api.codetabs.com/v1/proxy?quest=https://swapi.co/api/films/${numb}`;
    console.log(this.id);
    return this.http.get<{ movie: Movie[] }>(url);
  }
}
