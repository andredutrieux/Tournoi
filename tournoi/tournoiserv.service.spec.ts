import { TestBed } from '@angular/core/testing';

import { TournoiservService } from './tournoiserv.service';

describe('TournoiservService', () => {
  let service: TournoiservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TournoiservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
