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
    this.getFavMovies();
  }

  getFavMovies(){
    this.service.getFavMovies().subscribe((favMovies: any) => {
      this.favMovies = favMovies;
      this.totalMovies = favMovies.length;
    });
  }

  switchPage(event: any) {
    // this.getFavMovies(event.pageIndex + 1);
  }

}
