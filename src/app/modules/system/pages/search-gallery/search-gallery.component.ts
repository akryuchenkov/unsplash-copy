import {Component, HostListener, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UnsplashService} from '../../../shared/unsplash.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-search-gallery',
  templateUrl: './search-gallery.component.html',
  styleUrls: ['./search-gallery.component.css']
})
export class SearchGalleryComponent implements OnInit {

  private destruy$=new Subject<undefined>();


  pictures = [];
  value = '';
  innerWidth = 1920;
  currentTopic = '';

  srch = '';
  private subscription: Subscription;

  constructor(private unsplashService: UnsplashService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.pipe(takeUntil(this.destruy$)).subscribe((params: Params) => {
      this.value = params['srch'];
    });
    // this.subscription = activatedRoute.queryParams.subscribe(queryParam => this.value = queryParam['find']);
    this.subscription = activatedRoute.params.subscribe(param => this.value = param['srch']);
    // this.value = activatedRoute.snapshot.params['find'];
    //alert(this.value);
    if (this.value) {
      // this.value = this.unsplashService.getValue();
      //this.value = this.unsplashService.value;
      // this.value = 'kek';
      this.unsplashService.getSearch(this.value).subscribe(pictures => {
        // @ts-ignore
        this.pictures = pictures.results;
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

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.innerWidth = window.innerWidth;
  // }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.activatedRoute.params.subscribe(({ topic }) => {
      this.currentTopic = topic;
    });
  }

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   this.innerWidth = window.innerWidth;
  // }

  ngOnChanges(changes: SimpleChanges) {
    this.pictures = [];
    // routeSubc: Subscription;
    // querySubs: Subscription;
    this.value = 'fuck';
    alert(this.value);
    this.unsplashService
      .getSearch(this.value)
      .subscribe((pictures) => {
        this.pictures = pictures;
      });
  }
  public ngOnDestroy(): void
  {
    this.destruy$.next();
    this.destruy$.complete();
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
