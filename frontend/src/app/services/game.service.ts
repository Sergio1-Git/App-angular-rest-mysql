import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private api_url = `${environment.API_URL}`;

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(`${this.api_url}/games`);
  }

  getOne(id: string) {
    return this.http.get(`${this.api_url}/games/${id}`);
  }

  addGame(game: Game) {
    return this.http.post(`${this.api_url}/games`, game);

  }
deleteGame(id: string){
  return this.http.delete(`${this.api_url}/games/${id}`);
}
editGame(id: string, gameUpdated: Game){
  return this.http.put(`${this.api_url}/games/${id}`,gameUpdated);
}
}
