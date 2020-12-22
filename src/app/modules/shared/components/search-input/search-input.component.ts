import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UnsplashService} from '../../unsplash.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  @Input()
  value = '';
  isFocus = false;
  @Output()
  update = new EventEmitter<string>();

  constructor(private unsplashService: UnsplashService, private router: Router) {
  }
  onClick(): void
  {
    this.unsplashService.value = this.value;
    this.router.navigate(['ser']);
  }
  onChangeInput(e): void {
    this.value = e.target.value;
    this.unsplashService.value = this.value;
  }
  onFocusIn(): void {
    this.isFocus = true;
  }
  onFocusOut(): void {
    this.isFocus = false;
  }


  ngOnInit(): void {
  }

}
