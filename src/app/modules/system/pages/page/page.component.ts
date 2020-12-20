import {Component, OnInit} from '@angular/core';
import {UnsplashService} from '../../../shared/unsplash.service';
import {Routes} from "@angular/router";
import {AuthComponent} from '../../../auth/components/auth/auth.component';
import {LoginComponent} from '../../../auth/components/login/login.component';
import {RegisterComponent} from '../../../auth/components/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {path: '', component: LoginComponent},
      {path: 'join', component: RegisterComponent},
      {path: '**', redirectTo: ''}
    ],
  },
];
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],

})
export class PageComponent implements OnInit {


  constructor(private unsplashService: UnsplashService) {

  }

  ngOnInit(): void {

  }

}
