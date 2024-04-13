import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DTOSuperhero } from '../../interfaces/DTOSuperhero.type';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  private apiUrl = 'https://gateway.marvel.com:443/v1/public';
  private apiKey = 'apikey=19d1c6a7cfc4518733f4927a0ca68fe2';
  private hash='?ts=1&hash=7ab30bcefd9738b63c0d6804ebe3fd67'

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
}
