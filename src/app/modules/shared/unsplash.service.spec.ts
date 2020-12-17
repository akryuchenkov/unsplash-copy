import { TestBed } from '@angular/core/testing';

import { UnsplashService } from './unsplash.service';

describe('KekService', () => {
  let service: UnsplashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsplashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
