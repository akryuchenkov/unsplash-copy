import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const accessKey = 'KIKAhNUozBr8IesBioPmRElqLI3xLXOR-9bf3-PwLAg';

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

  getTopics(): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `https://api.unsplash.com/topics`,
      getUnsplashAuthConfig()
    );
  }

  getPhotosByTopic(topicName: string): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `https://api.unsplash.com/topics/${topicName}`,
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
    return this.httpClient.get<any[]>(`https://api.unsplash.com/random/photos`);
  }
}
