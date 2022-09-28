import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/Character';
import { DragonballService } from '../services/dragonball.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {

  @Input() newCharacter: Character = {
    name: '',
    power: 0,
  };

  // @Output() onCharacterAdded: EventEmitter<Character> = new EventEmitter();

  constructor(private _dragonballService: DragonballService) { }

  createCharacter() {
    if (this.newCharacter.name.trim().length === 0) return;

    // this.onCharacterAdded.emit({ ...this.newCharacter });

    this._dragonballService.addCharacter({ ...this.newCharacter });

    this.newCharacter.name = '';
    this.newCharacter.power = 0;
  }
}
