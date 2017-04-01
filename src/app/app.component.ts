import { Component, OnInit } from '@angular/core';
import { CatsService } from './services/cats.service';

@Component({
  selector: 'app-root',
  providers: [CatsService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AGL Coding Test';
  cats: any[];
  constructor(public catsService: CatsService) {

  }
  ngOnInit() {
    this.getCats();
  }
  getCats() {
    this.catsService
      .getCats().then((res) => this.cats = res);
  }
}
