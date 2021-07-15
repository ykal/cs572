import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoffeeApiService } from '../services/coffees-api.service';
import { Coffee } from '../../model/coffee';

@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css']
})
export class CoffeeDetailComponent implements OnInit {
  coffee!: Coffee;

  constructor(private route: ActivatedRoute,
     private coffeeApiService: CoffeeApiService,
     private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
     if(params.coffeeId) {
       this.fetchCoffee(params.coffeeId);
     } else {
       this.router.navigate(["/coffees"]);
     }
    })
  }

  fetchCoffee(coffeeId: string){
    this.coffeeApiService.getOneById(coffeeId)
    .then(coffee => this.coffee = coffee)
  }

}
