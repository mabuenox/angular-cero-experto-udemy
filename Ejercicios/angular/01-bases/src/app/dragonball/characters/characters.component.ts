import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/Character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {

  @Input("data") characters: Character[] = [];

}
