import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MovieListPage } from '../movie-list/movie-list';
import { MovieDetailPage } from '../movie-detail/movie-detail';
import { IMovie } from "../../interface/IMovie";
import { FavoriteMovieProvider } from "../../providers/favorite-movie/favorite-movie";

/**
 * Generated class for the MyMoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-movies',
  templateUrl: 'my-movies.html',
})

export class MyMoviesPage {
  favoriteMovies: IMovie[] = [];
 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private favoriteMovieProvider: FavoriteMovieProvider
  ) {}
 
  ionViewDidLoad() {
    console.log("ionViewDidLoad MyMoviesPage");
  }
 
  ionViewWillEnter() {
    this.initFavoriteMovies();
  }
 
  private initFavoriteMovies() {
    this.favoriteMovieProvider
      .getFavoriteMovies()
      .then(favs => (this.favoriteMovies = favs));
  }
 
  findMovie() {
    this.navCtrl.push(MovieListPage);
  }
 
  goToDetail(movie: IMovie) {
    this.navCtrl.push(MovieDetailPage, movie);
  }
}