import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { CounterModule } from './counter/counter.module';
import { DragonballModule } from './dragonball/dragonball.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    CounterModule,
    DragonballModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
