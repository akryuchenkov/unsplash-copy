import { Component, OnInit } from '@angular/core';
import {UnsplashService} from '../../../shared/unsplash.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
// tslint:disable-next-line:prefer-const

export class SubmitComponent implements OnInit {
  fileToUpload: File = null;
  constructor(private unsplashService: UnsplashService) {
  }

  ngOnInit(): void {
  }
  fileInput(files: FileList): void{
    this.fileToUpload = files.item(0);
    alert('lox');
    this.uploadFileToActivity();
  }
  uploadFileToActivity(): void {
    this.unsplashService.postPhoto(this.fileToUpload).subscribe(data => { alert('true');
    }, error => {
      alert('false');
    });
  }
}
