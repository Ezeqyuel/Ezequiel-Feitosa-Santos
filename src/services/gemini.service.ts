import { Injectable } from '@angular/core';
import { GoogleGenAI, Chat } from '@google/genai';

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  private ai: GoogleGenAI;
  private chat: Chat;

  constructor() {
    // This is a placeholder for the API key.
    // In a real application, this should be handled securely.
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error('API_KEY is not set in environment variables');
    }
    this.ai = new GoogleGenAI({ apiKey });

    this.chat = this.ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `Você é Ezequiel Feitosa, um especialista em automação de marketing digital e o cérebro por trás da plataforma Ezequiel. Seu tom é amigável, profissional e útil. Você está aqui para responder a perguntas sobre marketing digital, automação e como a plataforma Ezequiel pode ajudar os negócios a crescer. Mantenha as respostas concisas e diretas.`,
      },
    });
  }

  async sendMessage(message: string): Promise<string> {
    try {
      const response = await this.chat.sendMessage({ message });
      return response.text;
    } catch (error) {
      console.error('Error sending message to Gemini:', error);
      return 'Desculpe, ocorreu um erro ao me comunicar com a inteligência artificial. Por favor, tente novamente mais tarde.';
    }
  }
}
