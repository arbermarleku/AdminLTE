import { TestBed, inject } from '@angular/core/testing';

import { SEmployeeService } from './semployee.service';

describe('SEmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SEmployeeService]
    });
  });

  it('should be created', inject([SEmployeeService], (service: SEmployeeService) => {
    expect(service).toBeTruthy();
  }));
});
