import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthRoutingModule } from './shared/auth/auth-routing.module';
import { AuthenticatedGuard } from './shared/auth/authenticated.guard';

const routes: Routes = [
  {path: "", redirectTo: "/games", pathMatch: "full"},
  {path: "games", loadChildren: () => import('./game/game.module').then(m => m.GameModule)},
  {path: "auth", loadChildren: () => import('./shared/auth/auth.module').then(m => m.AuthModule), canDeactivate: []},
  {path: "profile", component: ProfileComponent, canActivate: [AuthenticatedGuard]},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
