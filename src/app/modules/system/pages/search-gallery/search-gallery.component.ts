import {Component, HostListener, OnInit} from '@angular/core';
import {UnsplashService} from '../../../shared/unsplash.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-gallery',
  templateUrl: './search-gallery.component.html',
  styleUrls: ['./search-gallery.component.css']
})
export class SearchGalleryComponent implements OnInit {

  pictures = [];
  value = 'winter';
  innerWidth = 1920;
  currentTopic = '';

  constructor(private unsplashService: UnsplashService,
              private activatedRoute: ActivatedRoute) {
    if (this.value) {
      // this.value = this.unsplashService.getValue();
      this.value = this.unsplashService.value;
      // this.value = 'kek';
      this.unsplashService.getSearch(this.value).subscribe((pictures) => {
        this.pictures = pictures;
      });
    }
    // else {
    //   this.unsplashService
    //     .getPhotosByTopic(this.value)
    //     .subscribe((pictures) => {
    //       this.pictures = pictures;
    //     });
    // }
  }

  get picturesInner() {
    return chunkArray(this.pictures, this.pictures.length / this.columns);
  }

  get columns() {
    if (this.innerWidth < 800) {
      return 1;
    }
    return 3;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.activatedRoute.params.subscribe(({ topic }) => {
      this.currentTopic = topic;
    });
  }

}

function chunkArray(arr, chunkSize) {
  let chunks = [];

  for (let index = 0; index < arr.length; index += chunkSize) {
    const chunk = arr.slice(index, index + chunkSize);
    chunks.push(chunk);
  }

  return chunks;
}
