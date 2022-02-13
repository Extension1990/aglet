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

  // getFavMovies(id: number) {
  //   this.service.getFavMovies(id).subscribe((favMovies: any) => {
  //     this.favMovies = favMovies;
  //     console.log(this.favMovies)
  //   })
  // }

  switchPage(event: any) {
    this.getMovies(event.pageIndex + 1);
  }

}
