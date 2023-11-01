import { TestBed } from '@angular/core/testing';

import { HousesService } from './houses.service';
import {HousingLocation} from "./housing-location";

describe('HousesService', () => {
  let service: HousesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HousesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
