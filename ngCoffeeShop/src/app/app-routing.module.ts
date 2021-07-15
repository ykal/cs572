import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: "", redirectTo: "/coffees", pathMatch: "full"},
  {path: "auth", loadChildren: () => import('./shared/auth/auth.module').then(m => m.AuthModule), canDeactivate: []},
  {path: "coffees", loadChildren: () => import('./coffee/coffee.module').then(m => m.CoffeModule), canDeactivate: []},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
