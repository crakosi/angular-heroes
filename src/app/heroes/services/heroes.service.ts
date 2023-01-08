import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroeResponse } from '../interfaces/heroes.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {


  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getHerores(): Observable<HeroeResponse[]>{
   return this.http.get<HeroeResponse[]>(`${ this.baseUrl }/heroes`)
  }

  getHeroeByID( id: string ): Observable<HeroeResponse>{
    return this.http.get<HeroeResponse>(`${ this.baseUrl }/heroes/${ id }`);
  }

  getSugerencias( termino: string): Observable<HeroeResponse[]>{
    return this.http.get<HeroeResponse[]>(`${ this.baseUrl }/heroes?q=${ termino}&_limit=6`);
  }
}
