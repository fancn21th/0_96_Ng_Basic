import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-simple-form",
  templateUrl: "./simple-form.component.html",
  styleUrls: ["./simple-form.component.css"]
})
export class SimpleFormComponent implements OnInit {
  @Input() message;
  @Output() update = new EventEmitter();
  isSelected: boolean = false;

  constructor() {
    // setInterval(() => (this.message = Math.random().toString()), 1000);
  }

  ngOnInit() {}
}
