import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StarwarsService } from '../service/starwars.service';
import { MatPaginator } from '@angular/material/paginator';
import { People } from'../service/models/people.model';
import { Planet } from'../service/models/planet.model';
import { Movie } from'../service/models/movie.model';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
<<<<<<< HEAD
    people: People[] = [];
    planets: Planet[] = [];
    movies: Movie[] = [];
    route: string = "";
    showSpinner: Boolean = true;
=======
  private people: People[] = [];
  private planets: Planet[] = [];
  private movies: Movie[] = [];
  private route: string = "";
  private showSpinner: Boolean = true;
>>>>>>> 0072b9107ce997671c8acc305e659bb0807aa15d

  constructor(private starWarsServ: StarwarsService, private activatedRoute:ActivatedRoute, private router:Router) { }

  displayedColumns: string[] = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'gender', 'birth_year'];
  displayedPlanetColumns: string[] = ['name', 'terrain', 'population'];
  displayedMovieColumns: string[] = ['title', 'producer', 'director', 'release_date'];

  dataSource = new MatTableDataSource();

<<<<<<< HEAD
  @ViewChild(MatSort) set content(sort: MatSort){
    this.dataSource.sort = sort;
  };
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    //Getting the URL
    const path = new URL(window.location.href);
    //Getting the if user is acessing people/ planets or moves.
=======
  @ViewChild(MatSort, {static: false}) set content(sort: MatSort){
    this.dataSource.sort = sort;
  };
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  ngOnInit() {
    const path = new URL(window.location.href);
>>>>>>> 0072b9107ce997671c8acc305e659bb0807aa15d
    this.route = (path.pathname.toString());
    if(this.route == '/people') {
      try {
        this.starWarsServ.getByContent(`${this.route}`)
        .subscribe(data => {
<<<<<<< HEAD
          {
            console.log(data);
            this.people = data['results'];
            this.dataSource = new MatTableDataSource(this.people); /* this.dataSource.sort = this.sort; */
            setTimeout(() => this.dataSource.paginator = this.paginator);
            this.showSpinner = false;
            console.log(data.results);}
        })

=======
          {this.people = data['results']; this.dataSource = new MatTableDataSource(this.people); /* this.dataSource.sort = this.sort; */ setTimeout(() => this.dataSource.paginator = this.paginator); this.showSpinner = false; console.log(data.results);}
        })
        
>>>>>>> 0072b9107ce997671c8acc305e659bb0807aa15d
      }
      catch(err) {
        throw err;
      }
    }
    else if(this.route == '/planets') {
      try {
        this.starWarsServ.getByContent(`${this.route}`)
        .subscribe(data => {
          {this.planets = data['results']; this.dataSource = new MatTableDataSource(this.planets); /* this.dataSource.sort = this.sort; */ setTimeout(() => this.dataSource.paginator = this.paginator); this.showSpinner = false; console.log(data.results);}
        })
      }
      catch(err) {
        throw err;
      }
    }
    else if(this.route == '/movies') {
      try {
        this.starWarsServ.getByContent(`${this.route}`)
        .subscribe(data => {
          {this.movies = data['results']; this.dataSource = new MatTableDataSource(this.movies); /* this.dataSource.sort = this.sort; */ setTimeout(() => this.dataSource.paginator = this.paginator); this.showSpinner = false; console.log(data.results);}
        })
      }
      catch(err) {
        throw err;
      }
    }
<<<<<<< HEAD

=======
    
>>>>>>> 0072b9107ce997671c8acc305e659bb0807aa15d
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  detailPeople(row) {
    //imprime url do cara
    console.log('%%%%%%%'+row.url);
    //pega qual o id do cara
    var number = row.url.match(/\d+/g).map(Number);
    //transforma o numero em string
    number = number.toString();
    //formando a url para acessar a API
    var path = 'people/'+number;
    console.log('@@@@@@@@@@@@@@@@@@@' + number);

    this.router.navigate(["/details",number])
    this.starWarsServ.setId(number);
  }


  detailPlanet(row) {
    console.log('%%%%%%%'+row.url);
    var number = row.url.match(/\d+/g).map(Number);
    number = number.toString();
    var path = 'planet/'+number;
    console.log('@@@@@@@@@@@@@@@@@@@' + number);
    this.router.navigate(["/details-planet",number])
    this.starWarsServ.setId(number);
  }

  detailMovie(row) {
    console.log('%%%%%%%'+row.url);
    var number = row.url.match(/\d+/g).map(Number);
    number = number.toString();
    var path = 'planet/'+number;
    console.log('@@@@@@@@@@@@@@@@@@@' + number);
    this.router.navigate(["/details-movie",number])
    this.starWarsServ.setId(number);
  }


}
