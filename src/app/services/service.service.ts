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

  // httpOptions = {
  //   headers: new HttpHeaders({ ContentType: 'application/json' })
  // };
  // headers = new HttpHeaders({ 'Content-Type': 'applications/form-data' });
  // httpOption = { headers: this.headers };

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

  getMovie(id: string) {
    return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`);
  }

  searchInMovies(searchText: string) {
    return this.http.get(`${this.searchUrl}search/movie?api_key=${this.apiKey}&query=${searchText}`);
  }

  getFavMovies(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/account/${id}/favorite/movies?api_key=${this.apiKey}&language=en-US&sort_by=created_at.asc&page=1`);
  }

}
