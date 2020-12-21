import { Component, OnInit } from '@angular/core';
import {UnsplashService} from '../../../shared/unsplash.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  photo;
  constructor(private unsplashService: UnsplashService) {
    this.unsplashService.getRandomPhoto().subscribe(topics => {
      this.photo = topics;
    });
  }
  ngOnInit(): void {
  }

}
