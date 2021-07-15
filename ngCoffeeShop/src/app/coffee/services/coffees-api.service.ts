import { Injectable } from '@angular/core';
import { CoffeeQueryParam } from 'src/app/model/cofffee-query-param';
import { ApiService } from 'src/app/shared/services/api.service';
import { Coffee } from '../../model/coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeApiService {
  private readonly  COFFEE_API_URL = "coffees";

  constructor(private apiService: ApiService<Coffee>) { }

  getAll(queryParam?: CoffeeQueryParam): Promise<Coffee[]> {
    return  this.apiService.get(this.COFFEE_API_URL, queryParam)
    .toPromise()
    .then(res => <Coffee[]>res);
  }

  create(coffee: Coffee): Promise<Coffee> {
    return  this.apiService
    .post(this.COFFEE_API_URL, coffee)
    .toPromise()
    .then(res => <Coffee>res);
  }

  getOneById(coffeeId: string): Promise<Coffee> {
    return this.apiService.get(`${this.COFFEE_API_URL}/${coffeeId}`)
    .toPromise()
    .then(res => <Coffee> res);
  }

  removeOneById(coffeeId: string): Promise<any> {
    console.log("removing ")
    return this.apiService.delete(this.COFFEE_API_URL, coffeeId)
    .toPromise()
    .then(res => res);
  }
}
