import { Component, OnInit } from '@angular/core';
import {UnsplashService} from '../../../shared/unsplash.service';
import {User} from '../../../../../../user';
import {Observable} from 'rxjs';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-userpage',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  constructor(private  unsplashService: UnsplashService,
              private  httpClient: HttpClientModule) {
    //
    // this.name = this.str[0].name;
    // this.unsplashService.getJsonUsers().subscribe(ans => {
    //   // @ts-ignore
    //   return this.data = JSON.parse(ans);
    // });
    // @ts-ignore
    // this.data =  JSON.parse(this.unsplashService.getJsonUsers());
    // alert(this.data);
  }

  ngOnInit(): void {
    // this.unsplashService.getJsonUsers().subscribe((answer) => {
    //   this.data = answer; console.log(this.data);
    //   //this.name = this.data[0].name;
    //   let i: number;
    //   for (i = 1; i < answer.length; i++)
    //   {
    //     if (this.name === answer[i].name)
    //     {
    //       this.data = answer[i];
    //     }
    //   }
    //   console.log(this.data);
    // console.log(this.data);
  }
}
