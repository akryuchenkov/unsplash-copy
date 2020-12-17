import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';


let accessKey: string;
accessKey = 'KIKAhNUozBr8IesBioPmRElqLI3xLXOR-9bf3-PwLAg';

// tslint:disable-next-line:typedef
function getUnsplashAuthConfig() {
  return {
    headers: {
      Authorization: 'Client-ID &(accessKey)',
    }
  };
}

@Injectable({
  providedIn: 'root',
})
export class UnsplashService {
  constructor(private httpClient: HttpClient) {
  }

  getTopics(): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `https://api.unsplash.com/topics`,
  );
  }

  getPhotosByTopic(topicName: string): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `https://api.unsplash.com/topics/${topicName}`,
    );
  }

  getPhotosByUsername(username: string): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `https://api.unsplash.com/users/${username}/photos`,
      getUnsplashAuthConfig()
    );
  }

  getRandomPhoto(): Observable<any[]> {
    return this.httpClient.get<any[]>(
      `https://api.unsplash.com/random/photos`
    );
  }
}
