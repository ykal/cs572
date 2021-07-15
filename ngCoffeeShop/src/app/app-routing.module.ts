import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticatedGuard } from './shared/auth/authenticated.guard';

const routes: Routes = [
  {path: "", redirectTo: "/coffees", pathMatch: "full"},
  {path: "auth", loadChildren: () => import('./shared/auth/auth.module').then(m => m.AuthModule), canDeactivate: []},
  {path: "coffees", loadChildren: () => import('./coffee/coffee.module').then(m => m.CoffeModule), canDeactivate: []},
  {path: "profile", component: ProfileComponent, canActivate: [AuthenticatedGuard]},
  {path: "**", component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
