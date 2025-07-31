import { ChangeDetectorRef, Component, DestroyRef, inject } from '@angular/core';
import { Message } from '../../../models/portfolio';
import { ChatService } from '../../services/chat-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-chat-ai',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './chat-ai.html',
  styleUrl: './chat-ai.scss'
})
export class ChatAi {

  userInput: string = '';
  messages: Message[] = [];
  isLoading = false;
  isOpen = true;
  private destroyRef = inject(DestroyRef);

  constructor(private chatService: ChatService, private cdr: ChangeDetectorRef) { }

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  sendMessage() {
    if (!this.userInput.trim()) return;
    const userMessage: Message = { sender: 'user', text: this.userInput };
    this.messages.push(userMessage);
    this.isLoading = true;
    this.chatService.sendMessage(this.userInput).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (response) => {
        const botMessage: Message = { sender: 'bot', text: response.reply };
        this.messages.push(botMessage);
        this.isLoading = false;
        this.cdr.detectChanges();
        console.log(this.isLoading);
      },
      error: () => {
        this.messages.push({ sender: 'bot', text: 'Something went wrong. Please try again.' });
        this.isLoading = false;
      }
    });
    this.userInput = '';
  }

}
