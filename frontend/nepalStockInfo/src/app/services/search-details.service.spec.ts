import { TestBed } from '@angular/core/testing';

import { SearchDetailsService } from './search-details.service';

describe('SearchDetailsService', () => {
  let service: SearchDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
