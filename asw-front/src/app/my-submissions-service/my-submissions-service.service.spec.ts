import { TestBed } from '@angular/core/testing';

import { MySubmissionsServiceService } from './my-submissions-service.service';

describe('MySubmissionsServiceService', () => {
  let service: MySubmissionsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySubmissionsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
