import { Component, Input } from '@angular/core';
import { Superhero } from '../../../interfaces/superhero.type';

@Component({
  selector: 'superhero-banner',
  templateUrl: './superhero-banner.component.html',
  styleUrl: './superhero-banner.component.scss'
})
export class SuperheroBannerComponent {

  @Input() superhero: Superhero = {} as Superhero;

}
