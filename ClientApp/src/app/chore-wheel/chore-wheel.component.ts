import { Component, OnInit } from "@angular/core";
import { ChoresService } from "../services/chores.service";
import { Chore } from "../chore";
@Component({
  selector: "app-chore-wheel",
  templateUrl: "./chore-wheel.component.html",
  styleUrls: ["./chore-wheel.component.css"],
})
export class ChoreWheelComponent implements OnInit {
  chores: Object;
  loading: boolean;
  constructor(private choresService: ChoresService) {}
  showChores(): void {
    this.choresService
      .getChores()
      .subscribe((chores: Chore[]) => (this.chores = chores));
  }
  ngOnInit() {
    this.showChores();
  }
}
