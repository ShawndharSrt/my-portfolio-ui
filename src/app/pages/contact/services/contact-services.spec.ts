import { TestBed } from '@angular/core/testing';

import { ContactServices } from './contact-services';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

describe('ContactServices', () => {
  let service: ContactServices;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient()
      ]
    });
    service = TestBed.inject(ContactServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
