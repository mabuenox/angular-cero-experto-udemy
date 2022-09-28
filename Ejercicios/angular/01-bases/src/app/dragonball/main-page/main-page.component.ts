import { Component } from '@angular/core';
import { Character } from '../interfaces/Character';
import { DragonballService } from '../services/dragonball.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  newCharacter: Character = {
    name: '',
    power: 0,
  };
}
