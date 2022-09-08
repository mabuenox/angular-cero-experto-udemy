import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  heroes:string[] = ['Hulk','Ironman','Superman','Batman','Capitán América'];
  deletedHero: string = '';

  removeHero(){
    this.deletedHero = this.heroes.shift() || '';
  }
}
