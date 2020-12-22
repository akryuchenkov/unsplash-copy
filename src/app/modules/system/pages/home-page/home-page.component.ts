import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UnsplashService} from '../../../shared/unsplash.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  currentTopic = '';
  pic;
  constructor(private unsplashService: UnsplashService, private activatedRoute: ActivatedRoute) {
    this.unsplashService.getRandomPhoto().subscribe(photo => {
      this.pic = photo;
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ topic }) => {
      this.currentTopic = topic;
    });
  }

}
