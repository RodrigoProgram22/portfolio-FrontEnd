import { TestBed } from '@angular/core/testing';

import { AcercaDeService } from './acerca-de.service';

describe('AcercaDeService', () => {
  let service: AcercaDeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcercaDeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
