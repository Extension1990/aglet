import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {

  movies: any;
  totalMovies: any;

  constructor(private service: ServiceService) { }

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
