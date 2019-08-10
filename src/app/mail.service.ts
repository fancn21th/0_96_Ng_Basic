import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MailService {
  message: string = `You've got mail `;
  messages: any[] = [
    { id: 0, text: `I've finish my first email` },
    { id: 1, text: `I've finish my second email` },
    { id: 2, text: `I've finish my third email` }
  ];
  update(id, text) {
    this.messages = this.messages.map(m => (m.id === id ? { id, text } : m));
  }
  constructor() {}
}
