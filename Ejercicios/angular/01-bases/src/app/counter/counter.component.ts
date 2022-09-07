import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <h1>{{title}}</h1>
  <h2>La base es {{base}}</h2>

  <button (click)="sum(+base)">+1</button>
  <span>{{counter}}</span>
  <button (click)="sum(-base)">-1</button>

  `
})
export class CounterComponent {
  title: string = 'Contador app';
  counter: number = 0;
  base: number = 5;

  sum(qty:number): void {
    this.counter = this.counter + qty;
  }

}
