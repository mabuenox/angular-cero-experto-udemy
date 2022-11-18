import { Component } from '@angular/core';
import { Gif } from '../interfaces/gifs.interfaces';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [],
})
export class ResultsComponent {

  get searchResults(): Gif[]{
    return this.gifsService.searchResults;
  }

  constructor(private gifsService: GifsService) {}
}
