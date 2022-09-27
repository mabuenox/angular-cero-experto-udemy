import { Component } from '@angular/core';
import { Character } from '../interfaces/Character';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  characters: Character[] = [
    {
      name: 'Goku',
      power: 14000,
    },
    {
      name: 'Vegeta',
      power: 7500,
    },
  ];

  newCharacter: Character = {
    name: '',
    power: 0,
  };

  addCharacter(character: Character) {
    this.characters.push(character);
    console.log(this.characters[this.characters.length - 1]);
  }
}
