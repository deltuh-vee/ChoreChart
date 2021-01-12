import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Chore } from "../chore";

@Injectable({
  providedIn: "root",
})
export class ChoresService {
  endpoint = "https://localhost:5001/api/Chores";
  constructor(private http: HttpClient) {}
  getChores() {
    return this.http.get<Chore[]>(this.endpoint);
  }
  addChore(chore: Chore): Observable<Chore> {
    return this.http.post<Chore>(this.endpoint, chore);
  }
}
