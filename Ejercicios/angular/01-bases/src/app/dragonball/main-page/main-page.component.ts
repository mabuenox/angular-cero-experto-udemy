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

  character: Character = {
    name: 'Trucks',
    power: 12000
  }

  createCharacter() {
    console.log( this.character );
  }
}
