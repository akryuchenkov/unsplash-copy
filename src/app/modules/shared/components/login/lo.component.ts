import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-lo',
  templateUrl: './lo.component.html',
  styleUrls: ['./lo.component.css']
})
export class LoComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
  }

}
