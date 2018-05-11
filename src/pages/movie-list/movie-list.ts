import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MovieApiProvider } from "../../providers/movie-api/movie-api";
import { MovieDetailPage } from "../movie-detail/movie-detail";
import { IMovie } from "../../interface/IMovie";

/**
 * Generated class for the MovieListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@IonicPage()
@Component({
  selector: "page-movie-list",
  templateUrl: "movie-list.html"
})

export class MovieListPage {
  movies  = new Array<IMovie>();
 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieApiProvider: MovieApiProvider
  ) {}
 
  ionViewDidLoad() {
    this.movieApiProvider.getMovies().subscribe(data =>{
      this.movies = data;
    })
  }
 
  goToDetail(movie: IMovie) {
    this.navCtrl.push(MovieDetailPage, movie);
  }
}
