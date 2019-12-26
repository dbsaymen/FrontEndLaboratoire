import { TestBed } from '@angular/core/testing';

import { EnseignantChercheurService } from './enseignant-chercheur.service';

describe('EnseignantChercheurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnseignantChercheurService = TestBed.get(EnseignantChercheurService);
    expect(service).toBeTruthy();
  });
});
