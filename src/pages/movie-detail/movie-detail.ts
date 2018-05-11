import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IMovie } from "../../interface/IMovie";
import { FavoriteMovieProvider } from "../../providers/favorite-movie/favorite-movie";

/**
 * Generated class for the MovieDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html',
})

export class MovieDetailPage {
  movie: IMovie;
  isFavorite: boolean = false;
 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private favoriteMovieProvider: FavoriteMovieProvider
  ) {}
 
  ionViewDidLoad() {
    this.movie = this.navParams.data;
    this.favoriteMovieProvider
      .isFavoriteMovie(this.movie)
      .then(value => (this.isFavorite = value));
  }
 
  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    this.favoriteMovieProvider.toogleFavoriteMovie(this.movie);
  }
}