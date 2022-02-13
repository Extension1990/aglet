import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  user: any;
  movies: any;
  favMovies: any;
  totalMovies: any;
  searchResults: any;
  searchText: string;

  constructor(private service: ServiceService) {
    this.searchText = '';
  }

  ngOnInit(): void {
    this.getMovies(1);
    // this.getFavMovies(1);
  }

  getMovies(pageNumber: number){
    this.service.getMovies(pageNumber).subscribe((movies: any) => {
      this.movies = movies.results.slice(0, 9);
      this.totalMovies = 45;
    });
  }

  switchPage(event: any) {
    this.getMovies(event.pageIndex + 1);
  }

  
  addFavMovie(id:string, title: string, poster_path: string, release_date: string) {
    console.log(id)
    this.service.addFavMovie(id, title, poster_path, release_date).subscribe((favMovie) => {
      
    })
  }

}
