import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<any[]> {
    return this.http.get<any[]>('https://api.tvmaze.com/shows');
  }

  getTvShows(): Observable<any[]> {
    return this.http.get<any[]>('https://api.tvmaze.com/search/shows?q=star');
  }

  getMovieById(id: string) {
    return this.http.get<any>(`https://api.tvmaze.com/shows/${id}`);
  }
  
}
