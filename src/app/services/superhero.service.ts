import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DTOSuperhero } from '../../interfaces/DTOSuperhero.type';
import { catchError, throwError } from 'rxjs';
import { DTOComic } from '../../interfaces/DTOComic.type';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;
  private hash = environment.hash;

  constructor(private http: HttpClient) { }


  //function to get all the superheroes from the API
  getSuperheroes(offset: number) {
    return this.http.get<DTOSuperhero>(`${this.apiUrl}/characters${this.hash}&${this.apiKey}&limit=100&offset=${offset}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401){
          return throwError('You re not authorized, please try again later.');
        }
        return throwError('Something bad happened; please try again later.');
      })
    )
  }

  //function to get all the superheroes by name
  getSuperheroesByName(name: string) {
    return this.http.get<DTOSuperhero>(`${this.apiUrl}/characters${this.hash}&${this.apiKey}&name=${name}&nameStartsWith=${name}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401){
          return throwError('You re not authorized, please try again later.');
        }
        return throwError('Something bad happened; please try again later.');
      })
    )
  }

  //function to get all the superheroes by comic
  getSuperheroesByComics(comic: string){
    return this.http.get<DTOSuperhero>(`${this.apiUrl}/characters${this.hash}&${this.apiKey}&comics=${comic}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401){
          return throwError('You re not authorized, please try again later.');
        }
        return throwError('Something bad happened; please try again later.');
      })
    )
  }

  //function to get all the superheroes by serie
  getSuperheroesBySeries(serie: string){
    return this.http.get<DTOSuperhero>(`${this.apiUrl}/characters${this.hash}&${this.apiKey}&series=${serie}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401) {
          return throwError('You re not authorized, please try again later.');
        }
        return throwError('Something bad happened; please try again later.');
      })
    );
  }

  //function to get a single superheroe by id
  getSuperheroById(id: number){
    return this.http.get<DTOSuperhero>(`${this.apiUrl}/characters/${id}${this.hash}&${this.apiKey}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401) {
          return throwError('You re not authorized, please try again later.');
        }
        return throwError('Something bad happened; please try again later.');
      })
    );
  }

  getComicsBySuperhero(id: number){
    return this.http.get<DTOComic>(`${this.apiUrl}/characters/${id}/comics${this.hash}&${this.apiKey}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 401) {
          return throwError('You re not authorized, please try again later.');
        }
        return throwError('Something bad happened; please try again later.');
      })
    );
  }
}
