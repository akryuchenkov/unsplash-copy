import { SimpleChanges } from '@angular/core';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { UnsplashService } from '../../unsplash.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  @Input()
  topic = '';
  innerWidth = 1920;
  topics: string[] = ['nature', 'people', 'architecture', 'current-events', 'experimental', 'fashion', 'film', 'health', 'interiors'];

  pictures: any[] = [];
  constructor(private unsplashService: UnsplashService) {

    if (this.topic === 'search')
    {
      this.unsplashService.getSearch(this.topic).subscribe((pictures) => {
        this.pictures = pictures;
      });
    }
    else
    {
      if (!this.topic)
      {
        alert(this.topic);
        this.unsplashService.getListPhotos().subscribe((pictures) => {
          this.pictures = pictures;
        });
        // this.unsplashService.getSearch(this.topic).subscribe(pictures => {
        //   this.pictures = pictures.results;
        // });
      } else {
        alert('NOT');
        this.unsplashService
          .getPhotosByTopic(this.topic)
          .subscribe((pictures) => {
            this.pictures = pictures;
          });
      }
    }
  }

  get picturesInner() {
    return chunkArray(this.pictures, this.pictures.length / this.columns);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  get columns() {
    if (this.innerWidth < 800) {
      return 1;
    }
    return 3;
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.pictures = [];
    this.unsplashService
      .getPhotosByTopic(changes.topic.currentValue)
      .subscribe((pictures) => {
        this.pictures = pictures;
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
