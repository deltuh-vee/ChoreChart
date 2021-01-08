import { Component, OnInit } from "@angular/core";
import { ChoresService } from "../services/chores.service";
import { Chore } from "../chore";
import { Observable } from "rxjs";
@Component({
  selector: "app-chore-wheel",
  templateUrl: "./chore-wheel.component.html",
  styleUrls: ["./chore-wheel.component.css"],
})
export class ChoreWheelComponent implements OnInit {
  chores$: Observable<Chore[]>;
  loading: boolean;
  constructor(private choresService: ChoresService) {}
  showChores(): void {
    this.chores$ = this.choresService.getChores();
  }
  ngOnInit() {
    this.showChores();
  }
}
