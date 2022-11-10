import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = '72Krgcbk5ThCbKB4cgbJVmZ1n7wVSEkW';
  private _history: string[] = [];

  get history(): string[] {
    return [...this._history];
  }

  constructor(private httpClient: HttpClient) { }

  search(query: string) {
    if (query.length === 0) {
      return;
    }
    if (this._history.some((item) => item.toLowerCase() == query.toLowerCase())) {
      return;
    }
    this._history.unshift(query);
    this._history = this._history.splice(0, 10);

    this.httpClient.get('https://api.giphy.com/v1/gifs/search?api_key=72Krgcbk5ThCbKB4cgbJVmZ1n7wVSEkW&q=Pablo Escobar&limit=10')
      .subscribe( (result: any) => console.log(result.data) )

  }
}
