import { Component, OnInit } from '@angular/core';
import { SuperheroService } from './services/superhero.service';
import { Superhero } from '../interfaces/superhero.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'superhero-app';

  superheroes: Superhero[] = [];
  page!: number;

  constructor(
    private apiService : SuperheroService
  ) { }

  ngOnInit(): void {
    this.getSuperheroes();
  }

  getSuperheroes() {
    this.apiService.getSuperheroes(0).subscribe((data) => {
      this.superheroes = data.data.results
    })
  }

  updateSuperheroes(superheroesFiltered: Superhero[]) {
    console.log(superheroesFiltered)
    this.superheroes = superheroesFiltered
  }
}
