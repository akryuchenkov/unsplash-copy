import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SubmitComponent} from '../submit/submit.component';

@Component({
  selector: 'app-lo',
  templateUrl: './lo.component.html',
  styleUrls: ['./lo.component.css']
})
export class LoComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  // tslint:disable-next-line:typedef
  openDialog() {
    this.dialog.open(SubmitComponent);
  }

  ngOnInit(): void {
  }

}
