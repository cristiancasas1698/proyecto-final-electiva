import { TestBed } from '@angular/core/testing';

import { UniversidadesService } from './universidades.service';

describe('UniversidadesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniversidadesService = TestBed.get(UniversidadesService);
    expect(service).toBeTruthy();
  });
});
