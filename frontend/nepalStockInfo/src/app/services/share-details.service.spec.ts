import { TestBed } from '@angular/core/testing';

import { ShareDetailsService } from './share-details.service';

describe('ShareDetailsService', () => {
  let service: ShareDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
