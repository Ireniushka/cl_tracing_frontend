import { TestBed } from '@angular/core/testing';

import { TrackTestsService } from './track-tests.service';

describe('TrackTestsService', () => {
  let service: TrackTestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackTestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
