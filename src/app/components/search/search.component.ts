import { Component, EventEmitter, Output } from '@angular/core';
import { SuperheroService } from '../../services/superhero.service';
import { Option } from '../../../interfaces/option.type';
import { Superhero } from '../../../interfaces/superhero.type';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})

export class SearchComponent {

  @Output() superheroesFiltered: EventEmitter<Superhero[]> = new EventEmitter<Superhero[]>();

  constructor(private apiService : SuperheroService) { }
  
  searchTerm: string = '';
  searchByNameActive : boolean = false;
  options : Option[] = [
    {
      label: 'Filter by name',
      selected: true,
      id: 'name'
    },
    {
      label: 'Filter by comic',
      selected: false,
      id: 'comic'
    },
    {
      label: 'Filter by serie',
      selected: false,
      id: 'serie'
    }
  ]

  onCheckboxChange(selectedOption: Option) {
    this.options.forEach(option => {
      if (option !== selectedOption) {
        option.selected = false;
      }
    });
  }

  search(){

    let query : string = this.searchTerm.trim();

    if(this.options[1].selected === true){
      this.apiService.getSuperheroesByComics(query).subscribe((data) => {
        this.superheroesFiltered.emit(data.data.results);
      })
    } else if (this.options[2].selected === true){
      this.apiService.getSuperheroesBySeries(query).subscribe((data) => {
        this.superheroesFiltered.emit(data.data.results);
      })
    } else {
      this.apiService.getSuperheroesByName(query).subscribe((data) => {
        this.superheroesFiltered.emit(data.data.results);
        console.log(data)
      })
    }
  }
}
