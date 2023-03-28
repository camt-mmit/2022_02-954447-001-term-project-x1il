import { TestBed } from '@angular/core/testing';

import { CharacterFetchService } from './character-fetch.service';

describe('CharacterFetchService', () => {
  let service: CharacterFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
