import { TestBed } from '@angular/core/testing';

import { StaffFetchService } from './staff-fetch.service';

describe('StaffFetchService', () => {
  let service: StaffFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
