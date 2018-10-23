import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieService } from './services/movie.service';



@NgModule({
  declarations: [AppComponent,HomeComponent, MovieListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
