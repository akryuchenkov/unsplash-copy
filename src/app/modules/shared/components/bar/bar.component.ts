import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  list = [
    {text: 'Architecture'},
    {text: 'Current Events'},
    {text: 'Experimental'},
    {text: 'Fashion'},
    {text: 'Film'},
    {text: 'Health & Wellness'},
    {text: 'Interiors'},
    {text: 'Nature'},
    {text: 'People'},
    {text: 'Street Photography'}
  ];
  first = this.list[0];
  last = this.list[this.list.length];
  constructor() { }

  ngOnInit(): void {
  }

}
