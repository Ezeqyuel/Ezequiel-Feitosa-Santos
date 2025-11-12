import { Component, ChangeDetectionStrategy, signal, inject, ViewChild, ElementRef, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { GeminiService } from '../../services/gemini.service';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './chatbot.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatbotComponent {
  @ViewChild('messageContainer') private messageContainer!: ElementRef;

  private fb = inject(FormBuilder);
  private geminiService = inject(GeminiService);

  isOpen = signal(true);
  isLoading = signal(false);
  messageForm: FormGroup;
  messages = signal<Message[]>([
    {
      sender: 'bot',
      text: 'Olá! Sou o Ezequiel, seu assistente virtual. Como posso ajudar a impulsionar seu marketing hoje?'
    }
  ]);

  constructor() {
    this.messageForm = this.fb.group({
      userInput: ['', Validators.required]
    });
  }

  toggleChat(): void {
    this.isOpen.update(open => !open);
  }

  async sendMessage(): Promise<void> {
    if (this.messageForm.invalid) {
      return;
    }

    const userInput = this.messageForm.value.userInput;
    this.messages.update(msgs => [...msgs, { sender: 'user', text: userInput }]);
    this.messageForm.reset();
    this.isLoading.set(true);
    this.scrollToBottom();

    try {
      const botResponse = await this.geminiService.sendMessage(userInput);
      this.messages.update(msgs => [...msgs, { sender: 'bot', text: botResponse }]);
    } catch (error) {
      this.messages.update(msgs => [...msgs, { sender: 'bot', text: 'Ocorreu um erro. Tente novamente.' }]);
    } finally {
      this.isLoading.set(false);
      this.scrollToBottom();
    }
  }
  
  private scrollToBottom(): void {
    afterNextRender(() => {
        try {
            if (this.messageContainer) {
                this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
            }
        } catch (err) {
            console.error('Could not scroll to bottom:', err);
        }
    });
  }
}