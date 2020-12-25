import { Component, OnInit } from '@angular/core';
import {UnsplashService} from '../../../shared/unsplash.service';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-userpage',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  name: string;
  constructor(private  unsplashService: UnsplashService) {
    // alert(this.unsplashService.Name);
    this.name = this.unsplashService.Name;
  }

  ngOnInit(): void {
  }
}
