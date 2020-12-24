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
    //this.unsplashService.toLogin().subscribe();
  }

  ngOnInit() {
    // const response = fetch('https://www.biletik.aero/upload/medialibrary/807/807f262b60da392f1e09aa6d33f20a9b.png');
    // if (response.finally()) {
    //   const json = (await response).json();
    // }
    // fetch('https://api.unsplash.com/photos/?client_id=KIKAhNUozBr8IesBioPmRElqLI3xLXOR-9bf3-PwLAg&query=london')
    //   // tslint:disable-next-line:only-arrow-functions typedef
    //   .then(function(response){
    //     return response.json();
    //   })
    //   // tslint:disable-next-line:only-arrow-functions typedef
    //   .then(function(data)
    //   {
    //     console.log('data', data);
    //   })
    //   // tslint:disable-next-line:only-arrow-functions typedef
    //   .then(function(data: string) {
    //     const json = JSON.parse(data);
    //   });

  }

  onClick(): void
  {
    // this.unsplashService.value = this.email;
    // this.router.navigate(['ser']);


    if (this.password != '' && this.email != '')
    {
      alert('fuck');
      this.unsplashService.LoginEmail = this.email;
      this.unsplashService.LoginPassword = this.password;
      login(this.email, this.password, this.unsplashService);
      this.router.navigate(['user']);
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

  ff(): boolean
  {
    if (this.password != '' || this.email != '')
    {
      return true;
    }
    else {
      alert('ЫЫЫ ты GanDone');
      return false;
    }
  }


}

function login(mail: string, pass: string, uns: UnsplashService) {
  uns.getJsonUsers().subscribe((answer) => {
    let data;
    data = answer; console.log(data);
    let i: number;
    for (i = 1; i < answer.length; i++)
    {
      if (mail === answer[i].email && pass === answer[i].password)
      {
        uns.Name = answer[i].username;
        alert('Ты вошёл под именем МАкс');
      }
    }

  });
}
