import { TestBed } from '@angular/core/testing';

import { SnackbarService } from './snackbar.service';
import { provideZonelessChangeDetection } from '@angular/core';

describe('SnackbarService', () => {
  let service: SnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SnackbarService,
        provideZonelessChangeDetection()
      ]
    });
    service = TestBed.inject(SnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
