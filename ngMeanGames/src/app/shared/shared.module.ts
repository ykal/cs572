import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ApiService } from './services/api.service';
import { AuthModule } from './auth/auth.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    AuthModule
  ],
  providers: [
    ApiService
  ]
})
export class SharedModule { }
