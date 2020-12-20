import { Component, OnInit } from '@angular/core';
import {UnsplashService} from '../../unsplash.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pictures = [];
  constructor(private unsplashService: UnsplashService) {
      this.unsplashService.getListPhotos().subscribe(pictures => {
        this.pictures = pictures;
      });
  }

  ngOnInit(): void {
  }

}
