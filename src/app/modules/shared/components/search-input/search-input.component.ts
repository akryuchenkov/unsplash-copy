import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  constructor() {
  }

  onChangeInput(e): void {
    this.value += e.target.value;
    this.update.emit(this.value);
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
