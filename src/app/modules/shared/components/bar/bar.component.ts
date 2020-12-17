import {Component, OnInit} from '@angular/core';
import {UnsplashService} from '../../unsplash.service';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  topics = [];

  constructor(private unsplashService: UnsplashService) {
    this.unsplashService.getTopics().subscribe(topics => {
      console.log(topics);
      this.topics = topics;
    });
  }

  ngOnInit(): void {
  }

}
