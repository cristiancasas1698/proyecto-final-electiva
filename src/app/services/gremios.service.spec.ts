import { TestBed } from '@angular/core/testing';

import { GremiosService } from './gremios.service';

describe('GremiosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GremiosService = TestBed.get(GremiosService);
    expect(service).toBeTruthy();
  });
});
