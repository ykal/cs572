import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { CoffeesListComponent } from './coffees-list/coffees-list.component';

const routes: Routes = [
  {path: "", component: CoffeesListComponent},
  {path: ":coffeeId", component: CoffeeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
