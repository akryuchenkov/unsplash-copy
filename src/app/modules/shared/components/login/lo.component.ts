import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UnsplashService } from '../../unsplash.service';
import { SubmitComponent } from '../submit/submit.component';

@Component({
  selector: 'app-lo',
  templateUrl: './lo.component.html',
  styleUrls: ['./lo.component.css'],
})
export class LoComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private unsplashService: UnsplashService
  ) {}

  openDialog(): void {
    this.dialog.open(SubmitComponent);
  }

  toLogin(): void {
    window.location.href = `https://unsplash.com/oauth/authorize?client_id=${this.unsplashService.accessKey}&redirect_uri=http://localhost:4200/login&scope=public+read_user+write_user`;
  }

  ngOnInit(): void {}
}
