import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
})
export class Home implements OnInit {

  fullText: string = 'Full Stack Developer | Angular | Java | MongoDB';
  displayedText: string = '';
  charIndex = 0;
  typingDone = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.typeTextOnce();
  }

  typeTextOnce() {
    if (this.charIndex < this.fullText.length) {
      this.displayedText += this.fullText.charAt(this.charIndex);
      this.charIndex++;
      this.cdr.detectChanges();
      setTimeout(() => this.typeTextOnce(), 100);
    } else {
      this.typingDone = true;
      this.cdr.detectChanges();
    }
  }

}
