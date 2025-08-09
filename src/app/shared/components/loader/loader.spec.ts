import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader } from './loader';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideZoneChangeDetection, provideZonelessChangeDetection } from '@angular/core';

describe('Loader', () => {
  let component: Loader;
  let fixture: ComponentFixture<Loader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader],
      providers: [
        provideZonelessChangeDetection(),
        provideNoopAnimations()
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Loader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
