import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-fav-movies',
  templateUrl: './fav-movies.component.html',
  styleUrls: ['./fav-movies.component.scss']
})
export class FavMoviesComponent implements OnInit {
  
  movies: any;
  favMovies: any;
  totalMovies: any;
  searchText: string;

  constructor(private service: ServiceService) {
    this.searchText = '';
  }

  ngOnInit(): void {
    this.getMovies(1);
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

}
