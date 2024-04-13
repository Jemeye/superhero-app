import { Component, Input, OnInit } from '@angular/core';
import { Comic } from '../../../interfaces/comic.type';
import { ComicData } from '../../../interfaces/comicData.type';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrl: './comic-card.component.scss'
})

export class ComicCardComponent implements OnInit {

  public comicData! : ComicData;

  @Input() comic: Comic = {} as Comic;

  constructor() { }

  ngOnInit(): void {
    this.comicData = this.transformComic();
  }

  transformComic() : ComicData{
    return {
      title: this.comic.title,
      description: this.comic.description || 'No description',
      onSaleDate: this.comic.dates.find(date => date.type === "onsaleDate")?.date || 'No sale date',
      modifiedDate: this.comic.modified || 'No modified date',
      upc: this.comic.upc || 'No UPC information',
      price: this.comic.prices.find(price => price.type === "printPrice")?.price|| 0,
      miniature: this.comic.thumbnail.path + '.' + this.comic.thumbnail.extension,
      creators: this.comic.creators.items.map(item => item.name).join(', '),
      characters: this.comic.characters.items.map(item => item.name).join(', ')
  
    }
  }

 

}
