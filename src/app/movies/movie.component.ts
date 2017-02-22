import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'movies',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  // providers: [MovieService]
})
export class MovieComponent implements OnInit {

  bestList: Array<Object>;
  intheatre: Array<Object>;
  searchString2: any;
  searchResult: Array<Object>;

  constructor(private _movieservice: MovieService) {
    // this._movieservice.getpopular();
    // this._movieservice.getintheatres();

    // this._movieservice.getpopular().subscribe(data => {
    //   this.bestList = data.results;
    // });
    // this._movieservice.getintheatres().subscribe(data => {
    //   this.intheatre = data.results;
    // });
  }

  ngOnInit() {
    this._movieservice.getpopular().subscribe(data => {
      this.bestList = data.results;
    });
    this._movieservice.getintheatres().subscribe(data => {
      this.intheatre = data.results;
    });
  }

  searchMovie() {
    console.log(this.searchString2);
    this._movieservice.FindMovie(this.searchString2).subscribe(data => {
      this.searchResult = data.results;
      console.log('results: ' + data.results);
    });
  }
}
