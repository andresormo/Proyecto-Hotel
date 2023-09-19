import { TestBed } from '@angular/core/testing';

import { ApiBedsService } from './api-beds.service';

describe('ApiBedsService', () => {
  let service: ApiBedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
