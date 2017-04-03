import { Component, OnInit, Input } from '@angular/core';

import { PetsService } from '../services/pets.service';

import { Pets } from '../services/Pets';
@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  @Input() gender: string;
  @Input() pets: Pets;
  constructor() { }

  ngOnInit() {

  }

}
