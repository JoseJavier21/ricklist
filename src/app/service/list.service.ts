import { Injectable } from '@angular/core'; 3
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personaje, Result } from '../model/personaje';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private url = "https://rickandmortyapi.com/api/character"

  constructor(private http: HttpClient) { }

  getDatos(): Observable<Personaje> {
    return this.http.get<Personaje>(this.url);
  }

  nextPage(url: string): Observable<Personaje> {
    return this.http.get<Personaje>(url);
  }

  getid(id: number): Observable<Result> {
    return this.http.get<Result>(this.url + "/" + id);
  }

  getBusqueda(busqueda: string): Observable<Personaje> {
    return this.http.get<Personaje>(this.url + "/?name=" + busqueda);
  }
} 
