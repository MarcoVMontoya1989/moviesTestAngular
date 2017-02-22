import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css'],
    providers: [MovieService]
})
export class DetailsComponent implements OnInit {

    movie: Object;

    constructor(private router: ActivatedRoute, private _movieservice: MovieService) {
    }
    ngOnInit() {
        this.router.params.subscribe((params) => {
            let id: any = params['id'];
            this._movieservice.getMovie(id).subscribe(movieres => {
                console.log(movieres);
                this.movie = movieres;
            });
        });
    }
    // tslint:disable-next-line:eofline
}