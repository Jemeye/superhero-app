import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuperheroService } from '../../services/superhero.service';
import { Superhero } from '../../../interfaces/superhero.type';
import { Comic } from '../../../interfaces/comic.type';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrl: './comics.component.scss'
})
export class ComicsComponent implements OnInit {

  public userId!: number;
  public superhero!: Superhero;
  public comics!: Comic[];
  public page!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService : SuperheroService
  ) {

    const userId = this.activatedRoute.snapshot.params['id'];
    if (!userId) {
      this.userId = Number('1');
    } else {
      this.userId = Number(userId);
    }
  }

  ngOnInit(): void {
    this.getSuperhero();
    this.getComicsBySuperhero();
  }

  //function to get all the superheroes
  getSuperhero(){
    this.apiService.getSuperheroById(this.userId).subscribe((data) => {
      this.superhero = data.data.results[0];
      console.log(this.superhero)
    })

  }

  //function to get all the superheroes' comics by pages
  getComicsBySuperhero(){
    this.apiService.getComicsBySuperhero(this.userId).subscribe((data) => {
      this.comics = data.data.results
    })
  }

}
