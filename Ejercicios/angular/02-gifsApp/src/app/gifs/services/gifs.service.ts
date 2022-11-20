import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGIFResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = '72Krgcbk5ThCbKB4cgbJVmZ1n7wVSEkW';
  private url : string = 'https://api.giphy.com/v1/gifs';
  private _history: string[] = [];

  get history(): string[] {
    return [...this._history];
  }

  public searchResults: any[] = [];

  constructor(private httpClient: HttpClient) {

    this._history = JSON.parse(localStorage.getItem("history")!) || [];
    this.searchResults = JSON.parse(localStorage.getItem("searchResults")!) || [];

  }

  search(query: string) {
    if (query.length === 0) {
      return;
    }

    this.saveHistory(query);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.httpClient.get<SearchGIFResponse>(`${this.url}/search`, { params })
      .subscribe( (response) => {
        this.searchResults = response.data;
        localStorage.setItem("searchResults", JSON.stringify(this.searchResults));
      } );
  }

  private saveHistory(query: string){
    if (this._history.some((item) => item.toLowerCase() == query.toLowerCase())) {
      return;
    }
    this._history.unshift(query);
    this._history = this._history.splice(0, 10);
    localStorage.setItem("history", JSON.stringify(this._history));
  }
}
