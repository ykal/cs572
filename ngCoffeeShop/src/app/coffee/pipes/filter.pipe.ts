import { Pipe, PipeTransform } from '@angular/core';
import { Coffee } from '../../model/coffee';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(coffees: Coffee[], keyword: string, ...args: unknown[]): Coffee[] {
    if(keyword) {
      return coffees.filter(coffee => 
        coffee.name
        .toUpperCase()
        .indexOf(keyword.toUpperCase()) !== -1
      );
    }
    return coffees;
  }

}
