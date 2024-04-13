import { Component, Input } from '@angular/core';
import { Superhero } from '../../../interfaces/superhero.type';

@Component({
  selector: 'app-superhero-card',
  templateUrl: './superhero-card.component.html',
  styleUrl: './superhero-card.component.scss'
})
export class SuperheroCardComponent{

  @Input() superhero: Superhero = {} as Superhero;

  constructor() { }

}
