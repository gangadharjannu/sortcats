import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';

import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';

import { LoaderService } from './services/loader.service';

import { CustomHttpFactory } from './services/custom-http.factory';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    OrderByPipe,
    FilterByPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    {
      provide: Http,
      useFactory: CustomHttpFactory,
      deps: [XHRBackend, RequestOptions, LoaderService]
    },
    LoaderService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
