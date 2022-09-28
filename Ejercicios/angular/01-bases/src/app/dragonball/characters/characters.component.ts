import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/Character';
import { DragonballService } from '../services/dragonball.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {
  // @Input("data") characters: Character[] = [];

  public get characters(): Character[] {
    return this._dragonballService.characters;
  }

  constructor(private _dragonballService: DragonballService) { }

}
