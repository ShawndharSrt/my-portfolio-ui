import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Certification } from './certification';
import { provideZonelessChangeDetection } from '@angular/core';

describe('Certification', () => {
  let component: Certification;
  let fixture: ComponentFixture<Certification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Certification],
       providers: [
        provideZonelessChangeDetection()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Certification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
