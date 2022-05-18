import { TestBed } from '@angular/core/testing';

import { TrackActivitiesService } from './track-activities.service';

describe('TrackActivitiesService', () => {
  let service: TrackActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
