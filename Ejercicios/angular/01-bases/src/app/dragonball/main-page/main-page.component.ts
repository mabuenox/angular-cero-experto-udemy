import { Component } from '@angular/core';

interface Character {
  name: string;
  power: number;
}

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

  createCharacter() {
    if (this.newCharacter.name.trim().length === 0) return;

    this.characters.push({ ...this.newCharacter });

    console.log(this.characters[this.characters.length - 1]);

    this.newCharacter.name = '';
    this.newCharacter.power = 0;
  }
}
