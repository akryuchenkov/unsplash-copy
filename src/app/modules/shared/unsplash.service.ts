import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

let accessKey: string;
accessKey = 'KIKAhNUozBr8IesBioPmRElqLI3xLXOR-9bf3-PwLAg';


// tslint:disable-next-line:typedef
function getUnsplashAuthConfig() {
  return {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
  };
}

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  constructor(private httpClient: HttpClient) {}

  value = '';

  getTopics(): Observable<any[]> {
    // alert('wat');
    return this.httpClient.get<any[]>(
      `https://api.unsplash.com/topics`,
      getUnsplashAuthConfig()
    );
  }

  getPhotosByTopic(topicName: string): Observable<any[]> {
    // alert('wat');
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

  getRandomPhoto(): Observable<any[]> {
    return this.httpClient.get<any[]>(`https://api.unsplash.com/photos/random`);
  }
  getListPhotos(): Observable<any[]> {
    // alert('wat');
    return this.httpClient.get<any[]>(`https://api.unsplash.com/photos?per_page=30`,
      getUnsplashAuthConfig());
  }
  getTopic(topicName: string): Observable<any[]> {
  return this.httpClient.get<any[]>(`https://api.unsplash.com/topics/:${topicName}`,
    getUnsplashAuthConfig());
  }
  toLogin(): Observable<any>{
    return this.httpClient.post(`https://unsplash.com/oauth/authorize?client_id=${accessKey}`,
      getUnsplashAuthConfig());
  }

  // getSearch(requst: string): Observable<any[]>{
  //   alert('wat');
  //   return this.httpClient.get<any[]>(`https://api.unsplash.com/search/collections?page=30&query=${requst}`,
  //     getUnsplashAuthConfig());
  // }

  getSearch(requst: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`https://api.unsplash.com/search/photos?query=${requst}&per_page=30`,
      getUnsplashAuthConfig());
  }

  getValue(): string
  {
    return this.value;
  }

  setValue(value: string): void
  {
    this.value = value;
  }
}
