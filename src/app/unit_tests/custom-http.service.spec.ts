import { TestBed, inject } from '@angular/core/testing';

import { CustomHttpService } from '../services/custom-http.service';

describe('CustomHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomHttpService]
    });
  });

  it('should ...', inject([CustomHttpService], (service: CustomHttpService) => {
    expect(service).toBeTruthy();
  }));
});
