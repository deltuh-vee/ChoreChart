import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-add-chore",
  templateUrl: "./add-chore.component.html",
  styleUrls: ["./add-chore.component.css"],
})
export class AddChoreComponent implements OnInit {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      title: [],
      description: [],
      weekly: [],
      letter: [],
    });
  }

  ngOnInit() {}

  onSubmit(form: any): void {
    console.log("submitted:", form);
  }
}
