import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TournoiservService {

  constructor(private httpClient: HttpClient) { }
ngOnInit(): void {
  }
  getClubs() {
  return this.httpClient.get<any[]>("http://localhost:8080/clubs")}
  getEquipes() {
  return this.httpClient.get<any[]>("http://localhost:8080/equipes")}
}
