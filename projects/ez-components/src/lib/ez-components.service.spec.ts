import { TestBed } from '@angular/core/testing';

import { EzComponentsService } from './ez-components.service';

describe('EzComponentsService', () => {
  let service: EzComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EzComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
