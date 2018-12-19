import { TestBed } from '@angular/core/testing';

import { ConvertisseurService } from './convertisseur.service';

describe('ConvertisseurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConvertisseurService = TestBed.get(ConvertisseurService);
    expect(service).toBeTruthy();
  });
});
