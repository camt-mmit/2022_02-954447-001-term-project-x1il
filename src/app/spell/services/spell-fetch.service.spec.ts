import { TestBed } from '@angular/core/testing';

import { SpellFetchService } from './spell-fetch.service';

describe('SpellFetchService', () => {
  let service: SpellFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpellFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
