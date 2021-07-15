import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GamesApiService } from '../services/games-api.service';
import {Game} from '../../model/game';
import { AuthService } from 'src/app/shared/auth/services/auth.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  private readonly defaultGame: Game = {
    title: ""
  };
  games:Game[] = [];
  keyword = "";
  gameForm!: FormGroup;
  game: Game = this.defaultGame;

  constructor(private gameApiService: GamesApiService, public authService: AuthService) {
    this.gameForm = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      rate: new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[0-5]{1}")])),
      year: new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[1-2]{1}[0-9]{3}")])),
      minPlayers: new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[1-9][0-9]{0,}")])),
      maxPlayers: new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[1-9][0-9]{0,}")])),
    });
   }

  ngOnInit(): void {
    this.gameApiService.getAll()
    .then(games => {
      this.games = games;
    });
    this.refreshForm();
  }

  onCreateGame() {
    if(this.gameForm.valid) {
     this.gameApiService.create(this.game)
     .then(res => {
     this.refreshForm();
     })
    } else {
      console.log("invalid form", this.gameForm);
      
      // Todo:: clear data
      // Todo:: refresh the form
    }
  }

  onDeleteGame(gameId: string) {
    if(!gameId) return;
    this.gameApiService.removeOneById(gameId)
    .then(res => {
      const index = this.games.findIndex(game => game._id === gameId);
      if(!index) return;
      this.games.splice(index, 1);
    });
  }

  change(event: any) {
    console.log(this.gameForm);
  }

  refreshForm() {
    this.game = this.defaultGame;
    this.gameForm.reset();
  }
}
