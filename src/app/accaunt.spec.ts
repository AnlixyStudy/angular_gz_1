import { TestBed } from '@angular/core/testing';

import { Accaunt } from './accaunt';

describe('Accaunt', () => {
  let service: Accaunt;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Accaunt);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
