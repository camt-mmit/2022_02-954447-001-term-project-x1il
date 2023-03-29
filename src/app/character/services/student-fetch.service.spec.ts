import { TestBed } from '@angular/core/testing';

import { StudentFetchService } from './student-fetch.service';

describe('StudentFetchService', () => {
  let service: StudentFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
