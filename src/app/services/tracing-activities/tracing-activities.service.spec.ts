import { TestBed } from '@angular/core/testing';

import { TracingActivitiesService } from './tracing-activities.service';

describe('TracingActivitiesService', () => {
  let service: TracingActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TracingActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
