import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnsplashService } from '../../unsplash.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent implements OnInit {
  topics = [];
  constructor(
    private unsplashService: UnsplashService,
    private router: Router
  ) {
    this.unsplashService.getTopics().subscribe((topics) => {
      this.topics = topics;
    });
  }

  isActiveTopic(): boolean {
    return false;
  }

  toTopic(slug: string): void {
    this.router.navigate([`/${slug}`]);
  }

  ngOnInit(): void {}
}
