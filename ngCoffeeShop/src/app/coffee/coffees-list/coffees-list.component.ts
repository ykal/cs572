import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CoffeeApiService } from '../services/coffees-api.service';
import {Coffee} from '../../model/coffee';
import { AuthService } from 'src/app/shared/auth/services/auth.service';
import { Router } from '@angular/router';
import { CoffeeQueryParam } from 'src/app/model/cofffee-query-param';

@Component({
  selector: 'app-coffees-list',
  templateUrl: './coffees-list.component.html',
  styleUrls: ['./coffees-list.component.css']
})
export class CoffeesListComponent implements OnInit {
  private readonly defaultCoffee: Coffee = {
    name: ""
  };
  coffees:Coffee[] = [];
  keyword = "";
  coffeeForm!: FormGroup;
  coffee: Coffee = this.defaultCoffee;

  constructor(private coffeeApiService: CoffeeApiService, public authService: AuthService, private router: Router) {
    this.coffeeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      imageUrl: new FormControl('', Validators.required),
      availablity: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
    this.fetchCoffees();
    this.refreshForm();
  }

  private fetchCoffees(queryParam?: CoffeeQueryParam) {
    this.coffeeApiService.getAll(queryParam)
      .then(coffees => {
        this.coffees = coffees;
        console.log(this.coffees);
      });
  }

  onCreateCoffee() {
    if(this.coffeeForm.valid) {
     this.coffeeApiService.create(this.coffee)
     .then(res => {
     this.refreshForm();
     this.coffees.push(res);
     })
    } else {
      console.log("invalid form", this.coffeeForm);
      
      // Todo:: clear data
      // Todo:: refresh the form
    }
  }

  onDeleteCoffee(coffeeId: string) {
    if(!coffeeId) return;
    this.coffeeApiService.removeOneById(coffeeId)
    .then(res => {
      const index = this.coffees.findIndex(coffee => coffee._id === coffeeId);
      if(!index) return;
      this.coffees.splice(index, 1);
    });
  }

  change(event: any) {
    console.log(this.coffeeForm);
  }

  refreshForm() {
    this.coffee = this.defaultCoffee;
    this.coffeeForm.reset();
  }

  goToCoffeeDetail(coffeeId: string) {
    this.router.navigate(["/coffees", coffeeId]);
  }

  onSearch(event: any) {
    this.fetchCoffees({name: this.keyword});
  }
}
