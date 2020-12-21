import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  async ngOnInit(): Promise<void> {
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

}
