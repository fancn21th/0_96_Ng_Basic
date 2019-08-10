import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SimpleFormComponent } from "./simple-form/simple-form.component";
import { MailService } from "./mail.service";

@NgModule({
  declarations: [AppComponent, SimpleFormComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    // MailService,
    { provide: "mail", useClass: MailService }
    // { provide: "api", useValue: "provided value of api" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
