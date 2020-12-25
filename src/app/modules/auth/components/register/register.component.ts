import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../../../shared/unsplash.service';
import { Router } from '@angular/router';
import { User } from '../../../system/user';
import { global } from '@angular/compiler/src/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  photo: any;
  firstname = '';
  lastname = '';
  email = '';
  username = '';
  password = '';
  isFocus = false;
  private flag: boolean;
  constructor(
    private unsplashService: UnsplashService,
    private router: Router
  ) {
    this.unsplashService.getRandomPhoto().subscribe((topics) => {
      this.photo = topics;
    });
  }
  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  onClick() {
    if (
      this.firstname !== '' ||
      this.lastname !== '' ||
      this.email !== '' ||
      this.username !== '' ||
      this.password !== ''
    ) {
      const user: User = new User(
        this.firstname,
        this.lastname,
        this.email,
        this.username,
        this.password
      );
      this.flag = true;
      this.unsplashService.getJsonUsers().subscribe((answer) => {
        // let data;
        // data = answer; console.log(data);
        let i: number;
        for (i = 0; i < answer.length; i++) {
          // console.log(answer[i].email);
          // console.log(answer[i].password);
          if (
            this.email === answer[i].email ||
            this.username === answer[i].username
          ) {
            // alert('agas');
            this.flag = false;
            // this.unsplashService.Name = answer[i].username;
            // //  alert('Ты вошёл под именем МАкс');
            // this.unsplashService.LoginEmail = this.email;
            // this.unsplashService.LoginPassword = this.password;
            // this.router.navigate(['user']);
            break;
          }
        }
        if (this.flag) {
          this.unsplashService.createUser(user).subscribe(() => {
            alert('Успешно');
            this.router.navigate(['/user']);
          });
          this.unsplashService.Name = this.username;
        } else {
          alert('Аккаунт с данным именем или почтой уже существует');
        }
      });
    } else {
      alert('Invalid data');
    }
  }

  onChangeInputFirst(e): void {
    this.firstname = e.target.value;
    this.unsplashService.value = this.firstname;
  }
  onFocusInFirst(): void {
    this.isFocus = true;
  }
  onFocusOutFirst(): void {
    this.isFocus = false;
  }

  onChangeInputLast(e): void {
    this.lastname = e.target.value;
    this.unsplashService.value = this.lastname;
  }
  onFocusInLast(): void {
    this.isFocus = true;
  }
  onFocusOutLast(): void {
    this.isFocus = false;
  }

  onChangeInputMail(e): void {
    this.email = e.target.value;
    this.unsplashService.value = this.email;
  }
  onFocusInMail(): void {
    this.isFocus = true;
  }
  onFocusOutMail(): void {
    this.isFocus = false;
  }

  onChangeInputName(e): void {
    this.username = e.target.value;
    this.unsplashService.value = this.username;
  }
  onFocusInName(): void {
    this.isFocus = true;
  }
  onFocusOutName(): void {
    this.isFocus = false;
  }

  onChangeInputPassword(e): void {
    this.password = e.target.value;
    this.unsplashService.value = this.password;
  }
  onFocusInPassword(): void {
    this.isFocus = true;
  }
  onFocusOutPassword(): void {
    this.isFocus = false;
  }
}
