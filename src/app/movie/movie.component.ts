import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, pipe } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  urlMovie: any;
  urlImg: any = "https://ui-avatars.com/api/";
  movieData: any;
  searchText:any;

  constructor(private httpClient: HttpClient) { }
  httpHeaders:HttpHeaders=new HttpHeaders({
    "content-type":"application/json"
  });

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    this.urlMovie = "https://demo.credy.in/api/v1/maya/movies?page=1";
   this.httpClient.get(this.urlMovie).subscribe((resp: any) => {
    this.movieData = resp;
    console.log("response", this.movieData);
    })
  }
}
