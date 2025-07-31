import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { fadeInUp } from '../../shared/animations/animations';
import { ChatAi } from '../../shared/components/chat-ai/chat-ai';

@Component({
  selector: 'app-home',
  imports: [ChatAi],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  animations: [fadeInUp]
})
export class Home implements OnInit {

  fullText: string = 'Full Stack Developer | Angular | Java | MongoDB';
  displayedText: string = '';
  charIndex = 0;
  typingDone = false;

  constructor(private cdr: ChangeDetectorRef) { }

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
