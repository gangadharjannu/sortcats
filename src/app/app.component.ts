import { Component, OnInit } from '@angular/core';
import { PetsService } from './services/pets.service';
import { LoaderService } from './services/loader.service';
@Component({
  selector: 'app-root',
  providers: [PetsService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AGL Coding Test';
  pets: any[];
  pendingRequests: number = 0;
  constructor(private petsService: PetsService, public loaderService: LoaderService) {
    this.loaderService.pendingRequests.subscribe((count: number) => {
      this.pendingRequests = count;
      console.log('next');
    }, (error) => {
      console.log(error);
      console.log('error');
    }, () => {
      console.log('completed');
    });
  }
  ngOnInit() {
    this.getPets();
  }
  getPets() {
    this.petsService
      .getCats().then((res) => {
        this.pets = res;
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
// http://stackoverflow.com/questions/37069609/show-loading-screen-when-navigating-between-routes-in-angular-2
// https://medium.com/@Batch1211/angular2-resolving-asynchronous-data-services-before-they-are-injected-into-your-component-fa597cac41e0
// https://www.codeproject.com/Articles/1179258/An-Angular-Modal-Dialog-with-Advanced-Functionalit
// http://hantsy.blogspot.in/2017/03/getting-started-wtih-angular-2-part-5.html
// https://gist.github.com/mrgoos/45ab013c2c044691b82d250a7df71e4c
// http://www.adonespitogo.com/articles/angular-2-extending-http-provider/
// https://pub.scotch.io/@kashyapmukkamala/using-http-interceptor-with-angular2
// https://long2know.com/2017/01/angular2-http-interceptor-and-loading-indicator/