import { TestBed, inject } from '@angular/core/testing';

import { SemployeeService } from './semployee.service';

describe('SemployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SemployeeService]
    });
  });

  it('should be created', inject([SemployeeService], (service: SemployeeService) => {
    expect(service).toBeTruthy();
  }));
});
