import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.scss']
})
export class ViewMovieComponent implements OnInit {

  movie: any;
  genres: any;
  genre: any;
  productionCompanies: any;

  constructor(private activeRoute: ActivatedRoute, private service: ServiceService) { }

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.params['id'];
    this.getMovie(id);
  }

  getMovie(id: any){
    this.service.getMovie(id).subscribe((movie: any) => {
      this.movie = movie;
      this.genres = movie.genres;
      this.productionCompanies = movie.production_companies;
      console.log(this.movie);
    });
  }

}
