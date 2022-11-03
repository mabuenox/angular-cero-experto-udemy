import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {

  @ViewChild("searchInput") searchInput! : ElementRef<HTMLInputElement>

  search() {
    console.log(this.searchInput.nativeElement.value);
    this.searchInput.nativeElement.value = '';
  }

}
