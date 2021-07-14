import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Game } from '../../model/game';

@Injectable({
  providedIn: 'root'
})
export class GamesApiService {
  private readonly  GAME_API_URL = "games";

  constructor(private apiService: ApiService<Game>) { }

  getAll(): Promise<Game[]> {
    return  this.apiService.getAll(this.GAME_API_URL)
  }

  create(game: Game): Promise<Game> {
    return  this.apiService.create(this.GAME_API_URL, game)
  }

  getOneById(gameId: string): Promise<Game> {
    return this.apiService.getOneById(this.GAME_API_URL, gameId);
  }

  removeOneById(gameId: string): Promise<any> {
    return this.apiService.removeOneById(this.GAME_API_URL, gameId)
  }

}
