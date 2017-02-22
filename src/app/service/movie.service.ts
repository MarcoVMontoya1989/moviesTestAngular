import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {

    apikey: any;

    constructor(private _json: Jsonp) {
        this.apikey = '04672ea14538880548f5d1357f68dbfc';

    }

    getpopular() {
        // tslint:disable-next-line:max-line-length
        return this._json.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=' + this.apikey)
            .map(res => res.json());
    }

    getintheatres() {
        // tslint:disable-next-line:max-line-length
        return this._json.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2016-12-01&primary_release_date.lte=2017-02-20&api_key=' + this.apikey)
            .map(res => res.json());
    }
    FindMovie(moviestring: any) {
        // tslint:disable-next-line:max-line-length
        return this._json.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query=' + moviestring + '&sort_by=popularity.desc&api_key=' + this.apikey)
        .map(res => res.json());
    }
    // tslint:disable-next-line:one-line
    getMovie(id: any){
        console.log('movie selected id: ' + id);
        // tslint:disable-next-line:max-line-length
        return this._json.get('https://api.themoviedb.org/3/movie/' + id + '?callback=JSONP_CALLBACK&api_key=' + this.apikey)
        .map(res => res.json());
    }
}