import { Component, OnInit } from '@angular/core';
import { PetsService } from './services/pets.service';
import { LoaderService } from './services/loader.service';
@Component({
  selector: 'app-root',
  providers: [PetsService, LoaderService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AGL Coding Test';
  pets: any[];
  showLoader: boolean;
  constructor(private petsService: PetsService, private loader: LoaderService) {
    this.loader.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }
  ngOnInit() {
    this.getPets();
  }
  getPets() {
    // http call starts
    this.loader.display(true);

    this.petsService
      .getCats().then((res) => {
        this.pets = res;
        // http call ends
        this.loader.display(false);
      });
  }
}
