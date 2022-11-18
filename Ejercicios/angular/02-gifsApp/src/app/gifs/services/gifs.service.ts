import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGIFResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = '72Krgcbk5ThCbKB4cgbJVmZ1n7wVSEkW';
  private _history: string[] = [];

  get history(): string[] {
    return [...this._history];
  }

  public searchResults: any[] = [];

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

    this.httpClient.get<SearchGIFResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
      .subscribe( (response) => {
        this.searchResults = response.data;
        console.log(response.data);
      } );

  }
}
