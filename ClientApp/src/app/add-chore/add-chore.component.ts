import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ChoresService } from "../services/chores.service";
import { Chore } from "../chore";
@Component({
  selector: "app-add-chore",
  templateUrl: "./add-chore.component.html",
  styleUrls: ["./add-chore.component.css"],
})
export class AddChoreComponent implements OnInit {
  form: FormGroup;
  constructor(fb: FormBuilder, private choresService: ChoresService) {
    this.form = fb.group({
      title: [],
      description: [],
      daily: [],
      letter: [],
    });
  }

  ngOnInit() {}

  onSubmit(form: any): void {
    console.log("submitted:", form);
    this.choresService.addChore(form).subscribe();
  }
}
