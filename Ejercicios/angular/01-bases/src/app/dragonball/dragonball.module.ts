import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { CharactersComponent } from './characters/characters.component';
import { AddCharacterComponent } from './add-character/add-character.component';
import { DragonballService } from './services/dragonball.service';

@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    AddCharacterComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DragonballService
  ]
})
export class DragonballModule { }
