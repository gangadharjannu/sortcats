import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';

import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
