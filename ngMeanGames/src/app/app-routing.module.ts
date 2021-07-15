import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthRoutingModule } from './shared/auth/auth-routing.module';

const routes: Routes = [
  {path: "", redirectTo: "/games", pathMatch: "full"},
  {path: "games", loadChildren: () => import('./game/game.module').then(m => m.GameModule)},
  {path: "auth", loadChildren: () => import('./shared/auth/auth.module').then(m => m.AuthModule)},
  {path: "profile", component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
