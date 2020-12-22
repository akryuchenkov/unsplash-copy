import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {UnsplashService} from '../shared/unsplash.service';


@NgModule({
  declarations: [LoginComponent, RegisterComponent ],
  imports: [CommonModule, ],
  exports: [LoginComponent, RegisterComponent],
  providers: [UnsplashService]
})
export class AuthModule {
  constructor() {
  }
}
