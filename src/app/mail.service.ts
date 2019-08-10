import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MailService {
  message: string = `You've got mail `;
  messages: string[] = [];
  constructor() {
    this.messages = [
      `I've finish my first email`,
      `I've finish my second email`,
      `I've finish my third email`
    ];
  }
}
