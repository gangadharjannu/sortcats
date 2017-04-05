import { TestBed, getTestBed, inject, async, ComponentFixtureAutoDetect, fakeAsync, tick } from '@angular/core/testing';
import { Headers, BaseRequestOptions, Response, HttpModule, Http, XHRBackend, RequestMethod } from '@angular/http';
import { ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { AppComponent } from '../app.component';
import { PetsService } from '../services/pets.service';
import { OrderByPipe } from '../pipes/order-by.pipe';
import { FilterByPipe } from '../pipes/filter-by.pipe';

class MockPetsService {
  public pets: any[] = [{
    gender: 'Male',
    pets: ['Garfield', 'Tom', 'Max', 'Jim']
  }, {
    gender: 'Female',
    pets: ['Garfield', 'Tabby', 'Simba']
  }];

  getCats() {
    return new Promise<any[]>((resolve, reject) => {
      resolve(this.pets);
    });
  }
}

describe('COMPONENT: AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, OrderByPipe, FilterByPipe],
      providers: [
        { provide: PetsService, useClass: MockPetsService },
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ]
    });
    // override dependencies of component to take required providers from mock service
    TestBed.overrideComponent(AppComponent, {
      set: {
        providers: [
          { provide: PetsService, useClass: MockPetsService }
        ]
      }
    });

    this.fixture = TestBed.createComponent(AppComponent);
    this.fixture.detectChanges();
    this.app = this.fixture.debugElement.componentInstance;
  }));

  it('should create the AppComponent', async(() => {
    expect(this.app).toBeTruthy();
  }));

  it(`should have as title 'AGL Coding Test'`, async(() => {
    expect(this.app.title).toEqual('AGL Coding Test');
  }));

  it('should contain all the cats', fakeAsync(() => {
    this.fixture.componentInstance.getCats();
    tick();
    this.fixture.detectChanges();
    expect(this.app.pets.length).toBe(7);
  }));

});
