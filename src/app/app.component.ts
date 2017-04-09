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
//
// https://www.pexels.com/blog/css-only-loaders/
// https://github.com/toddmotto/public-apis
// http://tobiasahlin.com/spinkit/
// https://scotch.io/tutorials/angular-2-http-requests-with-observables
// https://hassantariqblog.wordpress.com/2016/12/03/angular2-using-loaderspinner-as-angular-service-in-angular-2-application/
// https://plnkr.co/edit/G1shOf?p=preview