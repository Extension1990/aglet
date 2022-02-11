import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ContactComponent } from './components/contact/contact.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { ViewMovieComponent } from './components/view-movie/view-movie.component';

const routes: Routes = [
  { path: '', component: ListMoviesComponent },
  { path: 'movies', component: ListMoviesComponent },
  { path: 'movie/:id', component: ViewMovieComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
