import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GamesApiService } from './services/games-api.service';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GamesListComponent } from './games-list/games-list.component';
import { FilterPipe } from './pipes/filter.pipe';

import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    GamesListComponent,
    GameDetailComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [GamesApiService],
})
export class GameModule { }
