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

  agregarHeore( heroe: HeroeResponse): Observable<HeroeResponse>{
    return this.http.post<HeroeResponse>(`${ this.baseUrl }/heroes`, heroe );
  }

  actualizarHeore( heroe: HeroeResponse): Observable<HeroeResponse>{
    return this.http.put<HeroeResponse>(`${ this.baseUrl }/heroes/${ heroe.id }`, heroe );
  }

  eliminarHeore( id: string ): Observable<any>{
    return this.http.delete<any>(`${ this.baseUrl }/heroes/${ id }` );
  }
}
