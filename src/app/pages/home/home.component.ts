import { Component, OnInit } from '@angular/core';
import { SuperheroService } from '../../services/superhero.service';
import { Superhero } from '../../../interfaces/superhero.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  title = 'superhero-app';

  public superheroes: Superhero[] = [];
  public page!: number;

  constructor(
    private apiService : SuperheroService
  ) { }

  ngOnInit(): void {
    this.getSuperheroes();
  }

  //function to get all the superheroes
  getSuperheroes() {
    this.apiService.getSuperheroes(0).subscribe((data) => {
      this.superheroes = data.data.results
    })
  }

  //function to update the list of superheroes
  updateSuperheroes(superheroesFiltered: Superhero[]) {
    this.superheroes = superheroesFiltered
  }
}
