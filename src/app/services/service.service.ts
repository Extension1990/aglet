import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl: string;
  apiKey: string;
  language: string;

  private url = 'https://api.themoviedb.org/3/movie/';
  private searchUrl = 'https://api.themoviedb.org/3/search/movie';

  // HTTP HeadersOptions
  headers = new HttpHeaders ({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT',
    'Access-Control-Allow-Origin': '*',
  });  

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = '0a520fed6022dc05bbf2aadd5687ada8';
    this.language = 'en-US';
  }

  getMovies(pageNumber: number) {
    return this.http.get(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&page=${pageNumber}&language=${this.language}`);
  }

  getMovie(id: string) {
    return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`);
  }

}
