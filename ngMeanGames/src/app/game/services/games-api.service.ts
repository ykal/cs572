import { query } from '@angular/animations';
import { Injectable } from '@angular/core';
import { GameQueryParam } from 'src/app/model/game-query-param';
import { ApiService } from 'src/app/shared/services/api.service';
import { Game } from '../../model/game';

@Injectable({
  providedIn: 'root'
})
export class GamesApiService {
  private readonly  GAME_API_URL = "games";

  constructor(private apiService: ApiService<Game>) { }

  getAll(queryParam?: GameQueryParam): Promise<Game[]> {
    return  this.apiService.get(this.GAME_API_URL, queryParam)
    .toPromise()
    .then(res => <Game[]>res);
  }

  create(game: Game): Promise<Game> {
    return  this.apiService
    .post(this.GAME_API_URL, game)
    .toPromise()
    .then(res => <Game>res);
  }

  getOneById(gameId: string): Promise<Game> {
    return this.apiService.get(`${this.GAME_API_URL}/${gameId}`)
    .toPromise()
    .then(res => <Game> res);
  }

  removeOneById(gameId: string): Promise<any> {
    return this.apiService.delete(this.GAME_API_URL, gameId)
    .toPromise()
    .then(res => res);
  }

}
