import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameDetailComponent } from './game-detail/game-detail.component';
import { GamesListComponent } from './games-list/games-list.component';

const routes: Routes = [
  {path: "", component: GamesListComponent},
  {path: ":gameId", component: GameDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
