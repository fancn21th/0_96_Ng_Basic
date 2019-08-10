import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MailService {
  message: string = `You've got mail `;

  constructor() {}
}
