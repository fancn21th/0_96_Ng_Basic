import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-simple-form",
  templateUrl: "./simple-form.component.html",
  styleUrls: ["./simple-form.component.css"]
})
export class SimpleFormComponent implements OnInit {
  @Input() message;

  constructor() {
    setInterval(() => (this.message = Math.random().toString()), 1000);
  }

  ngOnInit() {}

  onClick(event, value) {
    console.log(event, ":", value);
  }
}
