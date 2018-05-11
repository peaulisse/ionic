import { IonicStorageModule } from "@ionic/storage";
import { BrowserModule } from '@angular/platform-browser';
import { MovieDetailPageModule } from "../pages/movie-detail/movie-detail.module";
import { MovieListPageModule } from "../pages/movie-list/movie-list.module";
import { MyMoviesPageModule } from "../pages/my-movies/my-movies.module";
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieApiProvider } from '../providers/movie-api/movie-api';
import { FavoriteMovieProvider } from '../providers/favorite-movie/favorite-movie';

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(MyApp),  
    IonicStorageModule.forRoot(),
    MyMoviesPageModule, 
    MovieListPageModule, 
    MovieDetailPageModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MovieApiProvider,
    FavoriteMovieProvider
  ]
})
export class AppModule {}
