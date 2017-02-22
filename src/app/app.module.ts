import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MovieComponent } from './movies/movie.component';
import { MovieService } from './service/movie.service';
import {appRoutesProvider, routing} from './app.routing';
import {DetailsComponent} from './details/details.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, MovieComponent, DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule, routing
  ],
  providers: [MovieService, appRoutesProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
