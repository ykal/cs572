import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './coffee-routing.module';
import { FilterPipe } from './pipes/filter.pipe';

import { SharedModule } from '../shared/shared.module';
import { CoffeesListComponent } from './coffees-list/coffees-list.component';
import { CoffeeDetailComponent } from './coffee-detail/coffee-detail.component';
import { CoffeeApiService } from './services/coffees-api.service';



@NgModule({
  declarations: [
    CoffeesListComponent,
    CoffeeDetailComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [CoffeeApiService],
})
export class CoffeModule { }
