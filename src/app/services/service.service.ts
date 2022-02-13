import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl: string;
  apiKey: string;
  language: string;
  nodeServerUrl = 'http://localhost:3000/';
  public data = Array();
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

  
  setData(data: any) {
    this.data[data] = data;
  }

  getData(data: any) {
    return this.data[data];
  }

  login(email: string, password: string) {
    return this.http.post(this.nodeServerUrl + 'login/', {email, password}, {responseType: 'json'});
  }

  getMovies(pageNumber: number) {
    return this.http.get(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&page=${pageNumber}&language=${this.language}`);
  }

  getFavMovies() {
    return this.http.get(this.nodeServerUrl + 'fav-movies');
  }

  addFavMovie(id: string, title: string, poster_path: string, release_date: string){
    return this.http.post(this.nodeServerUrl + 'add/fav-movie', {id, title, poster_path, release_date}, {responseType:'json'});
  }

  getMovie(id: string) {
    return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`);
  }

  searchInMovies(searchText: string) {
    return this.http.get(`${this.searchUrl}search/movie?api_key=${this.apiKey}&query=${searchText}`);
  }

}
