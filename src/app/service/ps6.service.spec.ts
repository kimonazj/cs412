import { TestBed } from '@angular/core/testing';

import { PS6Service } from './ps6.service';

describe('PS6Service', () => {
  let service: PS6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PS6Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
