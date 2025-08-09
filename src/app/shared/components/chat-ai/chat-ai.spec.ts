import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAi } from './chat-ai';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

describe('ChatAi', () => {
  let component: ChatAi;
  let fixture: ComponentFixture<ChatAi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatAi],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatAi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
