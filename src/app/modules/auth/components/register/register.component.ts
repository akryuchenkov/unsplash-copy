import { Component, OnInit } from '@angular/core';
import {UnsplashService} from '../../../shared/unsplash.service';
import {Router} from '@angular/router';
import {User} from '../../../system/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  photo: any;
  firstname = '';
  lastname = '';
  email = '';
  username = '';
  password = '';
  isFocus = false;
  constructor(private unsplashService: UnsplashService,
              private router: Router) {
    this.unsplashService.getRandomPhoto().subscribe(topics => {
      this.photo = topics;
    });
  }
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onClick() {

    const user: User = new User(this.firstname, this.lastname, this.email, this.username, this.password);
    this.unsplashService.createUser(user).subscribe(() =>
    {
      alert('Успешно');
      this.router.navigate(['/user']);
    });
    this.unsplashService.Name = this.username;
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
