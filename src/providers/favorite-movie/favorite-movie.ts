import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { IMovie } from "../../interface/IMovie";

/*
  Generated class for the FavoriteMovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const MOVIE_KEY = "movie_";
 
@Injectable()

export class FavoriteMovieProvider {
  constructor(private storage: Storage) {
    console.log("Hello UserPreferencesProvider Provider");
  }
 
  addFavoriteMovie(movie: IMovie) {
    this.storage.set(this.getMovieKey(movie), JSON.stringify(movie));
  }
 
  removeFavoriteMovie(movie: IMovie) {
    this.storage.remove(this.getMovieKey(movie));
  }
 
  isFavoriteMovie(movie: IMovie) {
    return this.storage.get(this.getMovieKey(movie));
  }
 
  toogleFavoriteMovie(movie: IMovie) {
    this.isFavoriteMovie(movie).then(
      isFavorite =>
        isFavorite
          ? this.removeFavoriteMovie(movie)
          : this.addFavoriteMovie(movie)
    );
  }
 
  getMovieKey(movie: IMovie) {
    return MOVIE_KEY + movie.id.toString();
  }
 
  getFavoriteMovies(): Promise<IMovie[]> {
    return new Promise(resolve => {
      let results: IMovie[] = [];
      this.storage
        .keys()
        .then(keys =>
          keys
            .filter(key => key.includes(MOVIE_KEY))
            .forEach(key =>
              this.storage.get(key).then(data => results.push(JSON.parse(data)))
            )
        );
      return resolve(results);
    });
  }
}