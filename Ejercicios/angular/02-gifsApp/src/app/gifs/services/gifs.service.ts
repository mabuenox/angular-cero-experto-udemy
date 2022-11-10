import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _history: string[] = [];

  get history(): string[] {
    return [...this._history];
  }

  search(query: string) {
    if (query.length === 0) {
      return;
    }
    if (this._history.some((item) => item.toLowerCase() == query.toLowerCase())) {
      return;
    }
    this._history.unshift(query);
    this._history = this._history.splice(0, 10);
  }
}
