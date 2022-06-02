import { TestBed } from '@angular/core/testing';

import { TracingTestsService } from './tracing-tests.service';

describe('TracingTestsService', () => {
  let service: TracingTestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TracingTestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
