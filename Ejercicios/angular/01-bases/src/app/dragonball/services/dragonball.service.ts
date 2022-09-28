import { Injectable } from "@angular/core";
import { Character } from "../interfaces/Character";

@Injectable()
export class DragonballService{

  private _characters: Character[] = [
    {
      name: 'Goku',
      power: 14000,
    },
    {
      name: 'Vegeta',
      power: 7500,
    },
  ];

  get characters(): Character[] {
    return [...this._characters];
  }

  addCharacter(character: Character) {
    this._characters.push(character);
    console.log(this._characters[this._characters.length - 1]);
  }

  constructor() {
    console.log("DragonballService contructed")
  }
}
