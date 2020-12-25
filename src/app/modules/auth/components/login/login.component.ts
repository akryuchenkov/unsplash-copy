import {Component, Input, OnInit} from '@angular/core';
import {UnsplashService} from '../../../shared/unsplash.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @Input()
  email = '';
  isFocus = false;
  @Input()
  password = '';

  data: any[];

  constructor(private unsplashService: UnsplashService,
              private  router: Router) {

  }

  // tslint:disable-next-line:typedef
  ngOnInit() {

  }

  onClick(): void
  {



    if (this.password !== '' && this.email !== '')
    {
      this.unsplashService.getJsonUsers().subscribe((answer) => {
        // let data;
        // data = answer; console.log(data);
        let i: number;
        for (i = 0; i < answer.length; i++)
        {
          // console.log(answer[i].email);
          // console.log(answer[i].password);
          if (this.email === answer[i].email && this.password === answer[i].password)
          {
            this.unsplashService.Name = answer[i].username;
            this.unsplashService.LoginEmail = this.email;
            this.unsplashService.LoginPassword = this.password;
            this.router.navigate(['user']);
            break;
          }
        }
      });
    }
    else
    {
      alert('Error');
    }
  }
  onChangeInput(e): void {
    this.password = e.target.value;
    this.unsplashService.value = this.password;
  }
  onFocusIn(): void {
    this.isFocus = true;
  }
  onFocusOut(): void {
    this.isFocus = false;
  }
  onChangeInput1(e): void {
    this.email = e.target.value;
    this.unsplashService.value = this.email;
  }
  onFocusIn1(): void {
    this.isFocus = true;
  }
  onFocusOut1(): void {
    this.isFocus = false;
  }
}
