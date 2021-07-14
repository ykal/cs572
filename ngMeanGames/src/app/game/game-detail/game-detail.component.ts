import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesApiService } from '../services/games-api.service';
import { Game } from '../../model/game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  game!: Game;

  constructor(private route: ActivatedRoute,
     private gameApiService: GamesApiService,
     private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
     if(params.gameId) {
       this.fetchGame(params.gameId);
     } else {
       this.router.navigate(["/games"]);
     }
    })
  }

  fetchGame(gameId: string){
    this.gameApiService.getOneById(gameId)
    .then(game => this.game = game)
  }

}
