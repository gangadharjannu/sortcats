import { Component, OnInit } from '@angular/core';
import { PetsService } from './services/pets.service';
@Component({
  selector: 'app-root',
  providers: [PetsService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AGL Coding Test';
  pets: any[];
  constructor(public petsService: PetsService) {

  }
  ngOnInit() {
    this.getPets();
  }
  getPets() {
    this.petsService
      .getCats().then((res) => this.pets = res);
  }
}
