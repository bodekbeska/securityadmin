/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SorterService } from './sorter.service';

describe('SorterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SorterService]
    });
  });

  it('should ...', inject([SorterService], (service: SorterService) => {
    expect(service).toBeTruthy();
  }));
});
