import { Component, Inject } from "@angular/core";
import { MailService } from "./mail.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Hello Angular";

  constructor(@Inject("mail") private mail) {}
  // constructor(private mail: MailService, @Inject("api") private api) {}
}
