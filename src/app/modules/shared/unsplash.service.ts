import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {User} from '../system/user';

let accessKey: string;
accessKey = 'KIKAhNUozBr8IesBioPmRElqLI3xLXOR-9bf3-PwLAg';
let secretKey: string;
secretKey = 'qCV8JebAVFLbTgW8xYzLXbdpC-N5UG39bnFRXGr5A_Y';
let keyImagify: string;
keyImagify = '13dcb72bd1cf222ae572eb6faac3f6d310bb8826';

// tslint:disable-next-line:typedef
function getUnsplashAuthConfig() {
  return {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
  };
}

// tslint:disable-next-line:typedef
function getImagifyAuthConfig() {
  return {
    headers: {
      Authorization: '13dcb72bd1cf222ae572eb6faac3f6d310bb8826',
      'Content-Type': 'multipart/form-data'
    },
  };
}


@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  constructor(private httpClient: HttpClient) {
   // alert('И снова седая ночь');
  }

  value = '';
  LoginEmail = '';
  LoginPassword = '';


  Name = '';

  getTopics(): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `https://api.unsplash.com/topics`,
      getUnsplashAuthConfig()
    );
  }

  getPhotosByTopic(topicName: string): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `https://api.unsplash.com/topics/${topicName}/photos?per_page=30`,
      getUnsplashAuthConfig()
    );
  }

  getPhotosByUsername(username: string): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `https://api.unsplash.com/users/${username}/photos`,
      getUnsplashAuthConfig()
    );
  }

  getRandomPhoto(): Observable<any> {
    return this.httpClient.get<any>(`https://api.unsplash.com/photos/random?`,
      getUnsplashAuthConfig());
  }

  getListPhotos(): Observable<any[]> {
    // alert('wat');
    return this.httpClient.get<any[]>(`https://api.unsplash.com/photos?per_page=30`,
      getUnsplashAuthConfig());
  }

  getTopicBySlug(topicName: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`https://api.unsplash.com/topics/${topicName}`,
      getUnsplashAuthConfig());
  }

  getSearch(requst: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`https://api.unsplash.com/search/photos?query=${requst}&per_page=30`,
      getUnsplashAuthConfig());
  }

  getJsonUsers(): Observable<any[]>
  {
    return  this.httpClient.get<any[]>(`http://localhost:3000/users`);
  }

  postPhoto(img: any): Observable<any>{
    return this.httpClient.post<any>(`https://app.imagify.io/api/upload/`,
      getImagifyAuthConfig(), img);
  }

  // tslint:disable-next-line:typedef
  createUser(user: User){
    return this.httpClient.post('http://localhost:3000/users', user);
  }
}

