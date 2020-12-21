import { Component, OnInit } from '@angular/core';
import {UnsplashService} from '../../unsplash.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ser',
  templateUrl: './ser.component.html',
  styleUrls: ['./ser.component.css']
})
export class SerComponent implements OnInit {

  constructor(private  unsplashService: UnsplashService, private router: Router) {
    // alert(this.unsplashService.value);
    this.router.navigate(['search', this.unsplashService.value]);
  }

  ngOnInit(): void {
  }

}
