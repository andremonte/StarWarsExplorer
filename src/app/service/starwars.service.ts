<<<<<<< HEAD
import { Injectable } from '@angular/core';
=======
import { Injectable, Output, EventEmitter } from '@angular/core';
>>>>>>> 0072b9107ce997671c8acc305e659bb0807aa15d
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

<<<<<<< HEAD
  private url: string = "https://api.codetabs.com/v1/proxy?quest=https://swapi.dev/api/";
=======
  private url: string = "https://api.codetabs.com/v1/proxy?quest=https://swapi.co/api/";
>>>>>>> 0072b9107ce997671c8acc305e659bb0807aa15d
  private result;
  private pp;
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
<<<<<<< HEAD

    this.sendPath.next(this.id);

=======
    
    this.sendPath.next(this.id);
    
>>>>>>> 0072b9107ce997671c8acc305e659bb0807aa15d
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
<<<<<<< HEAD

=======
>>>>>>> 0072b9107ce997671c8acc305e659bb0807aa15d
}
