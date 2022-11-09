import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  search() {
    this.gifsService.search(this.searchInput.nativeElement.value);
    this.searchInput.nativeElement.value = '';
  }
}
