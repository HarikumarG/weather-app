import { TestBed } from '@angular/core/testing';

import { CityStorageService } from './city-storage.service';

describe('CityStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityStorageService = TestBed.get(CityStorageService);
    expect(service).toBeTruthy();
  });
});
