import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../../model/game';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(games: Game[], keyword: string, ...args: unknown[]): Game[] {
    if(keyword) {
      return games.filter(game => 
        game.title
        .toUpperCase()
        .indexOf(keyword.toUpperCase()) !== -1
      );
    }
    return games;
  }

}
